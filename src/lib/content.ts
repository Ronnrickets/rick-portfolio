// All copy here is sourced directly from Ronnrick's resume/CV.
// Anything not present in the resume is marked PLACEHOLDER — swap before shipping.

export const profile = {
  name: "Ronnrick Alcedo",
  role: "Web Developer",
  location: "Makati City, Philippines",
  email: "alcedoronnrick@gmail.com",
  phone: "09463996815",
  // Derived from the resume's old portfolio URL (ronnrickets.github.io) — confirm this is correct.
  github: "https://github.com/Ronnrickets",
  linkedin: "https://www.linkedin.com/in/ronnrick-alcedo-005941321/" as string | null,
  resumeUrl: "/resume.pdf",
  summary:
    "Full-stack web developer with 4+ years of experience building production systems across PHP, Laravel, and MySQL on the backend, and React and Tailwind CSS on the front end. Currently supporting legacy PowerBuilder-based finance applications for a national retail company, alongside developing new internal web tools with PHP, Laravel, MySQL, AWS, and NGINX.",
  bio: [
    "I'm a full-stack developer based in Makati City, Philippines. Most of my work sits at the intersection of legacy systems and modern web — keeping older finance infrastructure running while building the tools that eventually replace it.",
    "Outside my day job, I take on freelance projects end-to-end: requirements, design, build, and deployment, usually with React and Tailwind CSS. I've also spent years maintaining production systems for manufacturing and logistics teams, so I care as much about documentation and reliability as I do about the interface.",
  ],
}

export const stats = [
  { value: "4+", label: "years professional experience" },
  { value: "10+", label: "production systems built or maintained" },
  { value: "2016", label: "started working" },
]

export type ExperienceItem = {
  year: string
  title: string
  org: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    year: "2025 - Present",
    title: "Web Developer",
    org: "Royal Wiseborn Retailers Inc.",
    bullets: [
      "Support and maintain legacy finance applications built in PowerBuilder, ensuring continuity of critical finance operations.",
      "Build and maintain internal web applications using PHP, Laravel, MySQL, JavaScript, and Tailwind CSS.",
      "Deploy and manage application infrastructure on AWS, configuring NGINX for web serving and routing, with PostgreSQL and DB2 for data storage and reporting.",
      "Partner with finance and retail operations stakeholders to translate business requirements into reliable, maintainable systems.",
    ],
  },
  {
    year: "2025",
    title: "Freelance Web Developer",
    org: "Self-employed",
    bullets: [
      "Design and build custom websites for independent clients end-to-end — requirements, UI, development, and deployment — using React and Tailwind CSS.",
      "Delivered a personal-brand promo site for a makeup artist to grow her client bookings and online presence.",
      "Built a promotional landing page driving traffic to a content creator's Instagram profile.",
      "Developed the marketing website for a startup company, translating brand direction into a responsive, production-ready site.",
    ],
  },
  {
    year: "2022",
    title: "Programmer",
    org: "HRD Singapore Pte., Ltd.",
    bullets: [
      "Developed web-based systems that enhanced users' production capabilities.",
      "Automated manual, paper-based forms into digital web-based workflows, reducing processing time and data-entry errors.",
      "Maintained and enhanced internal desktop applications using Visual Basic and MS Access.",
      "Managed databases across multiple servers, including MS SQL and MySQL.",
      "Authored detailed system documentation aligned with production processes.",
    ],
  },
  {
    year: "2016",
    title: "Production Staff",
    org: "PV Tech Pte., Ltd.",
    bullets: [
      "Collaborated with production staff to optimize loading schedules and minimize delays.",
      "Conducted regular material checks to meet quality and customer satisfaction standards.",
      "Implemented quality control measures that reduced errors in material handling and loading.",
    ],
  },
]

export type Project = {
  name: string
  description: string
  stack: string[]
  href?: string // live link, when one exists
  status: "Live" | "Internal"
}

// Live, linkable freelance/personal work.
export const featuredProjects: Project[] = [
  {
    name: "Ronica HMUA",
    description:
      "Promotional portfolio site for a professional makeup artist, built to showcase her work and drive client bookings.",
    stack: ["React", "Tailwind CSS"],
    href: "https://ronica-hmua.vercel.app/",
    status: "Live",
  },
  {
    name: "bhadzdxb",
    description:
      "Personal-brand landing page built to promote a content creator's Instagram profile through curated highlights and clear calls-to-action.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    href: "https://bhadzdxb.vercel.app/",
    status: "Live",
  },
  {
    name: "SB Dataworks",
    description:
      "Marketing website built for a startup company, from brand direction to a responsive, production-ready deployment.",
    stack: ["React", "Tailwind CSS"],
    href: "https://www.sbdataworks.com/",
    status: "Live",
  },
]

// Internal / company systems — no public link, so no href.
export const internalProjects: Project[] = [
  {
    name: "Manual Order Automation",
    description:
      "Automates the preparation, submission, review, and approval of manual purchase orders, including order calculations and approval workflows.",
    stack: ["PHP", "XAMPP", "JavaScript", "CSS", "MySQL", "AWS", "NGINX"],
    status: "Internal",
  },
  {
    name: "Price Canvass Automation",
    description:
      "Automates competitor price canvassing by assigning items to store personnel, capturing competitor prices, validating price differences, and monitoring completion.",
    stack: ["Laravel", "Laravel Blade", "XAMPP", "JavaScript", "CSS", "MySQL", "AWS", "NGINX"],
    status: "Internal",
  },
  {
    name: "Registration Forms",
    description:
      "Web-based registration platforms used to capture, organize, and manage participant information for company events, programs, and promotions. Includes Beauty by Royal Event, Lacoste Program Event, Tropical Pop Promo Event, and RPC Update.",
    stack: ["PHP", "XAMPP", "JavaScript", "CSS", "MySQL", "AWS", "NGINX"],
    status: "Internal",
  },
  {
    name: "Malasakit Store App",
    description:
      "Internal store application used to support and manage Malasakit-related store activities and information.",
    stack: ["PHP", "XAMPP", "JavaScript", "CSS", "MySQL", "Apache"],
    status: "Internal",
  },
  {
    name: "APE Booking Platform",
    description:
      "Online booking and scheduling platform for employees to register and manage their Annual Physical Examination (APE) appointments.",
    stack: ["PHP", "XAMPP", "JavaScript", "CSS", "MySQL", "AWS", "NGINX"],
    status: "Internal",
  },
  {
    name: "Performance Appraisal System",
    description:
      "Internal system for managing employee performance evaluations, appraisal forms, ratings, and assessment records.",
    stack: ["PHP", "XAMPP", "JavaScript", "CSS", "MySQL", "Apache"],
    status: "Internal",
  },
  {
    name: "Gift Check QR Code Generator",
    description:
      "Generates QR codes for gift checks to support easier identification, validation, and processing.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Internal",
  },
  {
    name: "Kitchen Display System (KDS)",
    description:
      "Manages restaurant orders from order taking and cashier processing through kitchen preparation, helping coordinate and monitor order fulfillment.",
    stack: ["PHP", "XAMPP", "JavaScript", "CSS", "MySQL", "Apache"],
    status: "Internal",
  },
  {
    name: "Stocktake Program",
    description:
      "Supports inventory counting by recording scanned items, quantities, locations, and counters, with monitoring and reporting of stocktake results.",
    stack: ["PHP", "Laravel", "Laravel Blade", "XAMPP", "JavaScript", "CSS", "MySQL"],
    status: "Internal",
  },
  {
    name: "PV HEMS System",
    description: "Centralizes barcode and sticker generation for solar components.",
    stack: ["Laravel", "Vue", "Vuetify", "MSSQL", "Apache"],
    status: "Internal",
  },
  {
    name: "PV Tech Production System",
    description:
      "Real-time tracking of raw materials and module status across each manufacturing process.",
    stack: ["Laravel", "Vue", "Vuetify", "Ant Design Vue", "Socket.IO", "MSSQL", "Apache"],
    status: "Internal",
  },
  {
    name: "Glulam Quality Label System",
    description:
      "Printing and monitoring of JAS quality stickers for Glulam products, supporting compliance and quality control.",
    stack: ["Laravel", "Vue", "Vuetify", "Ant Design Vue", "Socket.IO", "MSSQL", "Apache"],
    status: "Internal",
  },
  {
    name: "HTI Calibration System",
    description:
      "Manages calibration processes end-to-end, including measurement requests, damage reporting, and equipment monitoring.",
    stack: ["Visual Basic", "MS Access"],
    status: "Internal",
  },
  {
    name: "Accounting Tool",
    description: "Extracts and structures data to help manage financial records and transactions.",
    stack: ["Visual Basic", "MS Access"],
    status: "Internal",
  },
  {
    name: "PV Tech Operational Support",
    description: "Scheduling and final-label printing tool for issuance in production.",
    stack: ["Visual Basic", "MS Access"],
    status: "Internal",
  },
]

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    items: [
      "JavaScript", "PHP", "Laravel", "CodeIgniter", "React", "Vue.js", "Vuetify",
      "Ant Design Vue", "Tailwind CSS", "HTML", "CSS", "PowerBuilder",
    ],
  },
  {
    label: "Backend & APIs",
    items: ["MVC Architecture", "Eloquent ORM", "RESTful APIs", "Composer"],
  },
  {
    label: "Infrastructure & Cloud",
    items: ["AWS (EC2)", "LEMP Stack", "NGINX (Reverse Proxy)", "Apache", "Certbot (SSL/TLS)", "Linux Administration"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "DB2", "MS SQL", "MySQL", "MS Access", "Database Migrations"],
  },
  { label: "Tools", items: ["Git", "GitHub", "GitLab", "SourceTree", "Visual Basic"] },
]

export const education = {
  degree: "Bachelor of Science in Industrial Technology, Major in Computer Technology",
  school: "Batangas State University (Lemery Campus)",
  years: "2014 \u2013 2016",
}

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
]
