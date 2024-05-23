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
          "SaaS platform that provides automated invoice management software for businesses",
        startMonth: "Jun. 2023",
        endMonth: "present",
        works: [
          {
            name: "ARM",
            desc: "account receivable management platform written in Go and Vue.js",
            url: "https://arm.bizzi.vn",
            works: [
              {
                work: "Integrated invoices from diverse sources (email, CSV, Bizzi Invoice) for seamless data creation and management.",
              },
              {
                work: "Enhanced email flows and notifications to boost collaboration between stakeholders for receivables collection.",
              },
              {
                work: "Engineered real-time dashboard showcasing key receivable indicators (DSO, collections, aging) for reporting.",
              },
              {
                work: "Integrated Bizzi Pay for automated invoice payment reconciliation.",
              },
              {
                work: "Upgraded system architecture and implemented monitoring via Datadog/NewRelic for optimal performance.",
              },
              {
                work: "Collaborated closely with BD, CS, and Product teams on roadmap planning and aligning to client needs.",
              },
            ],
          },
          {
            work: "Implemented webhook flows using Hasura and RabbitMQ for real-time data sync between Bizzi Invoice and ARM.",
          },
          {
            work: "Helped design Bizzi Pay's database schema, system architecture, and payment integration with PayME and MSB.",
          },
          {
            work: "Utilized Serverless, AWS Lambda and SQS to create a system for extracting bank statements from various banks.",
          },
        ],
      },
      {
        jobTitle: "Software Engineer",
        companyName: "Anfin",
        companyUrl: "https://anfin.vn",
        companyDesc:
          "Venture-backed startup that builds the most innovative products in the wealth management and brokerage space",
        startMonth: "Dec. 2021",
        endMonth: "May. 2023",
        works: [
          {
            name: "Trading system",
            works: [
              {
                work: "Wrote functionality for advanced payment, dividend automation, and platform fee payment enforcement.",
              },
              {
                work: "Optimized legacy order system architecture.",
              },
            ],
          },
          {
            name: "Promotion system",
            works: [
              {
                work: "Redesigned service architecture, and restructured its MySQL/Firestore database schemas.",
              },
              {
                work: "Constructed 20+ gamification campaigns driving 500K+ rewards and user engagement.",
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
            work: "Encouraged and implemented best coding practices across the team, including linters, Go repository templates following DDD patterns, standardized logging and error handling, and clean code principles.",
          },
          {
            work: "Enhanced observability via custom GCP logging, tracing, monitoring, and alerting.",
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
          "An NPO with a mission to cultivate future Vietnamese talent by giving them early access to top-notch STEAM education",
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
            desc: "in-house mailing platform inspired by Mailchimp",
            url: "https://steamify.steamforvietnam.org/",
            works: [
              {
                work: "Integrated audience data import from CSV, UI, and Google BigQuery, handling 500K+ contacts.",
              },
              {
                work: "Enabled admin management of 800+ campaigns, including customization, scheduling, previewing, and testing emails.",
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
            work: "Started as a full-stack engineer, working with React, Node.js, and Jitsi. Expanded to product management and cross-functional leadership throughout the entire product lifecycle.",
          },
        ],
      },
    ],
  },
];
