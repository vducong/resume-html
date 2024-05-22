import { SectionProps } from "./types";

export const masterData: SectionProps[] = [
  {
    title: "Education",
    job: [
      {
        jobTitle: "Warsaw University of Technology",
        startMonth: "Oct. 2016",
        endMonth: "Oct. 2020",
        companyDesc: "Bachelor of Engineering in Telecommunications",
        works: [],
      },
    ],
  },
  {
    title: "Professional Experience",
    job: [
      {
        jobTitle: "Software Engineer",
        companyName: "Bizzi",
        companyUrl: "https://www.bizzi.vn",
        companyDesc:
          "The SaaS platform provides automated invoice management software for businesses",
        startMonth: "Jun. 2023",
        endMonth: "present",
        works: [
          {
            name: "ARM",
            desc: "account receivable management platform written in Go and Vue.js",
            url: "https://arm.bizzi.vn",
            works: [
              {
                work: "Integrated invoices from diverse sources, such as email, CSV, and Bizzi Invoice, prioritize seamless data management for core system functionality.",
              },
              {
                work: "Created email flows and notification systems, boosting interaction and responsiveness.",
              },
              {
                work: "Engineered an overview dashboard showcasing key receivable indicators, including DSO, collection performance, and receivables during periods, updated in real-time.",
              },
              {
                work: "Integrated Bizzi Pay for automated invoice reconciliations.",
              },
              {
                work: "Upgraded and improved the system to ensure smooth operation through active monitoring via Datadog and NewRelic.",
              },
              {
                work: "Collaborated closely with BD, CS, and Product team to understand client needs, contribute to product roadmap planning, and ensure alignment of offerings with requirements.",
              },
            ],
          },
          {
            name: "Bizzi Invoice",
            desc: "electronic invoice solution",
            url: "https://hddt.bizzi.vn",
            works: [
              {
                work: "Wrote a proxy to bridge the existing services with a legacy framework, guaranteeing compatibility with current system.",
              },
              {
                work: "Implemented webhook flows for real-time data synchronization by Hasura and RabbitMQ.",
              },
            ],
          },
          {
            name: "Bizzi Pay",
            desc: "payment system that integrates with multiple payment partners to facilitate transactions",
            works: [
              {
                work: "Helped design the database schema (PostgreSQL), develop system architecture, and integrate with PayME and MSB.",
              },
              {
                work: "Utilized AWS Lambda and SQS to create a system for extracting bank statements from various banks.",
              },
            ],
          },
        ],
      },
      {
        jobTitle: "Software Engineer",
        companyName: "Anfin",
        companyUrl: "https://anfin.vn",
        companyDesc:
          "The venture-backed fintech startup builds the most innovative products in the wealth management and brokerage space",
        startMonth: "Dec. 2021",
        endMonth: "May. 2023",
        works: [
          {
            name: "Trading system",
            desc: "serves as the backbone of the company's operations, driving its core business revenue",
            works: [
              {
                work: "Wrote functionality for advanced payment, dividend automation, and platform fee payment enforcement.",
              },
              {
                work: "Optimized legacy order system by addressing technical debt and implementing enhancements.",
              },
            ],
          },
          {
            name: "Promotion system",
            desc: "solely responsible for incentivizing users to enhance retention and overall satisfaction",
            works: [
              {
                work: "Redesigned service architecture, and restructured its MySQL/Firestore database schemas.",
              },
              {
                work: "Constructed 20+ gamification campaigns like leaderboards, lucky draws, airdrops, and daily challenges.",
              },
              {
                work: "Integrated with various key systems, ensuring a seamless and rewarding user experience, with 500K+ rewards given.",
              },
            ],
          },
          {
            work: "Delivered cutting-edge features to the web platform using Typescript, Next.js and MUI, encompassing trading, portfolio management, and ticker pricing charts.",
          },
          {
            work: "Added robust moderation capabilities - post reporting, user blocking, and automated moderation - to Anfin Community.",
          },
          {
            work: "Encouraged and implemented best coding practices across the team, including linters, git hooks, Go repository templates following DDD patterns, standardized logging, and clean code principles.",
          },
          {
            work: "Enhanced observability via custom GCP logging, tracing, monitoring, and alerting.",
          },
          {
            work: "Led architectural design across systems, optimized database queries, and error handling.",
          },
        ],
      },
    ],
  },
  {
    title: "Volunteer Experience",
    job: [
      {
        jobTitle: "Software Engineer",
        companyName: "STEAM for Vietnam",
        companyUrl: "https://www.steamforvietnam.org",
        companyDesc:
          "The NPO's mission is to cultivate future Vietnamese talent by giving them early access to top-notch STEAM education",
        startMonth: "Jan. 2021",
        endMonth: "present",
        works: [
          {
            name: "STEAMese",
            desc: "a social network enabling children to share and discuss their passion for STEM",
            url: "https://steamforvietnam.org/steamese",
            works: [
              {
                work: "Converted REST endpoints to GraphQL and developed features like Demo Day, User Journey and Discussion Groups.",
              },
            ],
          },
          {
            name: "STEAMify",
            desc: "in-house mailing platform managing 800+ campaigns and hundreds of thousands of audience contacts",
            url: "https://steamify.steamforvietnam.org/",
            works: [
              {
                work: "Integrated audience data import from CSV, UI, and Google BigQuery.",
              },
              {
                work: "Enabled admin campaign management, including customization, scheduling, previewing, and testing emails.",
              },
            ],
          },
        ],
      },
      {
        jobTitle: "Software Engineer",
        companyName: "Nói Nghe Project",
        companyUrl: "https://www.noinghe.com",
        companyDesc:
          "Offers a free chat platform, a mental health blog, and tailored courses for Vietnamese users seeking emotional support.",
        startMonth: "Mar. 2021",
        endMonth: "present",
        works: [
          {
            work: "Started as a full-stack engineer, working with React, Node.js, and Jitsi. Later evolved to include product management, user research, and cross-functional leadership throughout the entire product lifecycle.",
          },
        ],
      },
    ],
  },
];
