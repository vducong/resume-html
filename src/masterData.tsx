import { MasterDataProps } from "./types";

export const masterData: MasterDataProps = {
  contact: {
    fullName: "Đức Công, Vũ",
    phone: "+84 399 691 216",
    email: "vducong@gmail.com",
    linkedIn: {
      href: "https://www.linkedin.com/in/duc-cong-vu",
      text: "linkedin.com/in/duc-cong-vu",
    },
    github: {
      href: "https://www.github.com/vducong",
      text: "github.com/vducong",
    },
  },
  intro:
    "A full-stack software engineer with field experience in web development. Confident with numerical thinking and an analytic mindset to aim at effective problem-solving.\nI love traveling. Travel allows me to perceive the world in a more vivid way. One of my dreams is to take my wife on a global journey where we may see new cultures, hear fascinating tales, and shoot innumerable photographs to remember the experience.",
  exp: [
    {
      title: "Education",
      job: [
        {
          jobTitle: "Politechnika Warszawska",
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
          endMonth: "Jun. 2024",
          works: [
            {
              name: "ARM",
              desc: "an account receivables management platform using Go and Vue.js",
              url: "https://arm.bizzi.vn",
              works: [
                {
                  work: "Led a lean team through all phases of the invoicing lifecycle to successfully bring the product to market.",
                },
                {
                  work: "Integrated invoices from diverse sources (email, CSV, Bizzi Invoice) for seamless data creation and management.",
                },
                {
                  work: "Implemented collaboration workflows and notifications boosting stakeholder coordination for receivables collection.",
                },
                {
                  work: "Engineered real-time dashboard showcasing key metrics like DSO, aging, and collections to enable insightful reporting.",
                },
                {
                  work: "Integrated Bizzi Pay for automated invoice payment reconciliation.",
                },
                {
                  work: "Upgraded system architecture and implemented monitoring via Datadog/NewRelic for optimal performance.",
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
              work: "Utilized NestJS, Serverless, AWS Lambda and SQS to create a system for extracting bank statements from various banks.",
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
                  work: "Wrote functionality for advanced payment and platform fee payment enforcement, increasing revenue by up to 30%.",
                },
                {
                  work: "Refactored the pricing system to run asynchronously, implemented WebSocket for real-time updates, and used TimescaleDB and Redis for storing data, eliminating reliance on unstable crawled pricing.",
                },
              ],
            },
            {
              name: "Promotion system",
              works: [
                {
                  work: "Decoupled services, redesigned MySQL/Firestore schemas to improve scalability in response to new business needs.",
                },
                {
                  work: "Constructed 20+ gamification campaigns driving 500K+ rewards and user engagement.",
                },
              ],
            },
            {
              work: "Delivered cutting-edge features to the web platform using TypeScript, Next.js and MUI, encompassing trading, portfolio management, and ticker pricing charts.",
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
              desc: "a social network with 10K+ users enabling children to share and discuss their passion for STEM",
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
                  work: "Integrated audience data import from CSV, UI, and BigQuery, handling 500K+ contacts.",
                },
                {
                  work: "Enabled admin management of 400+ campaigns, including customization, scheduling, previewing, and testing emails.",
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
  ],
};
