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
      title: "Professional Experience",
      job: [
        {
          jobTitle: "Software Engineer",
          companyName: "1Long",
          companyUrl: "https://1long.vn",
          companyDesc:
            "Forward-thinking fintech startup revolutionizing asset management with a commitment to continuous innovation",
          startMonth: "Jul. 2024",
          endMonth: "present",
          works: [
            {
              work: "Spearheaded a fully functional MVP within one month using a microservices architecture (Go, Node.js, React, GCP, PostgreSQL) that laid the tech foundation for scaling to 10K+ users and 30B+ VND AUM.",
            },
            {
              work: "Instituted comprehensive GCP-based monitoring system with alerts, logging, and tracing that not only proactively identified performance bottlenecks but also helped resolve critical system issues.",
            },
            {
              work: "Diagnosed and fixed many backend challenges - e.g, re-engineering a long-processing saving interest calculation by caching, batching, and concurrent processing, thereby cutting 70% processing time and significantly lowering DB hits.",
            },
            {
              work: "Led the creation of a conversational AI agent (Python, Langchain, Milvus, RAG) to help investment analysts understand the Vietnamese stock market. It leverages an hourly/daily updated datastore covering securities fundamentals, market news, and key financial ratios - supplemented by real-time online data - and won the 2024 Global Shinhan Innoboost award.",
            },
          ],
        },
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
                  work: "Integrated invoices from several sources (email, CSV, Bizzi Invoice) using Hasura, SQS, and RabbitMQ allowed for real-time data management and synchronization.",
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
              ],
            },
            {
              work: "Helped design Bizzi Pay's database schema, system architecture, and payment integration with PayME and MSB.",
            },
            {
              work: "Utilized Typescript, Serverless, AWS Lambda and SQS to create a system for extracting bank statements from various banks.",
            },
          ],
        },
        {
          jobTitle: "Software Engineer",
          companyName: "Anfin",
          companyUrl: "https://anfin.vn",
          companyDesc:
            "Modern trading platform that aims to democratize access to financial services and wealth management for retail investors",
          startMonth: "Dec. 2021",
          endMonth: "May. 2023",
          works: [
            {
              work: "Wrote functionality for advanced payment and platform fee payment enforcement, increasing revenue by up to 30%.",
            },
            {
              work: "Refactored the pricing system to run asynchronously, implemented WebSocket for real-time updates, and used TimescaleDB and Redis for storing data, eliminating reliance on unstable crawled pricing.",
            },
            {
              work: "Redesigned promotion system and MySQL/Firestore schemas to improve scalability in response to new business needs, which enabled me to build on my own 20+ gamification campaigns driving 500K+ rewards and user engagement.",
            },
            {
              work: "Delivered cutting-edge features to the web including trading, portfolio management, and ticker pricing charts independently.",
            },
            {
              work: "Reduced harmful content by 70% by adding report management and automated moderation (spam, hate speech, malicious URLs, and image moderation) to the Anfin Community.",
            },
            {
              work: "Encouraged and implemented best coding practices across the team, including linters, Go repository templates following DDD patterns, standardized logging, error handling, and clean code principles.",
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
              desc: "a social network with 15K+ users enabling children to share and discuss their passion for STEM",
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
              works: [
                {
                  work: "Enabled admin management of 400+ campaigns, including customization, scheduling, previewing, and testing emails.",
                },
              ],
            },
          ],
        },
      ],
    },
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
  ],
};
