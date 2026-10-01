import { createHmac } from "node:crypto"

import { NextResponse, type NextRequest } from "next/server"

export const runtime = "nodejs"

type SupabaseRpcResponse = number | null

const VISIT_TIME_ZONE = "Asia/Manila"

function getVisitDate(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: VISIT_TIME_ZONE,
  }).formatToParts(date)

  const year = parts.find((part) => part.type === "year")?.value
  const month = parts.find((part) => part.type === "month")?.value
  const day = parts.find((part) => part.type === "day")?.value

  if (!year || !month || !day) {
    throw new Error("Unable to calculate the visit date.")
  }

  return `${year}-${month}-${day}`
}

function getClientIp(request: NextRequest) {
  // Vercel sets and sanitizes x-vercel-forwarded-for. The x-forwarded-for
  // fallback supports other trusted reverse proxies and local deployments.
  const forwardedFor =
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for")

  return forwardedFor?.split(",")[0]?.trim() || null
}

function getRequiredEnv(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = getRequiredEnv("SUPABASE_URL").replace(/\/$/, "")
    const secretKey = getRequiredEnv("SUPABASE_SECRET_KEY")
    const hashSecret = getRequiredEnv("VISITOR_HASH_SECRET")
    const clientIp = getClientIp(request)

    if (hashSecret.length < 32) {
      throw new Error("VISITOR_HASH_SECRET must be at least 32 characters.")
    }

    if (!clientIp) {
      return NextResponse.json(
        { error: "Visitor address is unavailable." },
        { status: 400 },
      )
    }

    // Including the Manila date prevents the stored fingerprint from being used
    // to correlate the same visitor over long periods. It also means one IP is
    // counted at most once per calendar day in Asia/Manila.
    const visitDate = getVisitDate(new Date())
    const visitorHash = createHmac("sha256", hashSecret)
      .update(`${visitDate}:${clientIp}`)
      .digest("hex")

    const supabaseResponse = await fetch(
      `${supabaseUrl}/rest/v1/rpc/record_portfolio_visit`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ p_visitor_hash: visitorHash }),
        cache: "no-store",
      },
    )

    if (!supabaseResponse.ok) {
      console.error(
        "Supabase visit counter failed:",
        supabaseResponse.status,
        await supabaseResponse.text(),
      )

      return NextResponse.json(
        { error: "Unable to record visit." },
        { status: 502 },
      )
    }

    const count = (await supabaseResponse.json()) as SupabaseRpcResponse

    if (typeof count !== "number" || !Number.isSafeInteger(count) || count < 0) {
      console.error("Supabase visit counter returned an invalid count.")
      return NextResponse.json(
        { error: "Unable to read visit count." },
        { status: 502 },
      )
    }

    return NextResponse.json(
      { count },
      { headers: { "Cache-Control": "no-store" } },
    )
  } catch (error) {
    console.error("Visit counter configuration error:", error)
    return NextResponse.json(
      { error: "Visit counter is not configured." },
      { status: 500 },
    )
  }
}
