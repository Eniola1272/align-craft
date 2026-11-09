export const contactEmail = "contact@aligncraft.com.ng";
export const services: string[] = [
  "Website Development",
  "UI/UX & Product Design",
  "SaaS & Web App Development",
  "Mobile App Development",
  "Digital Marketing & Growth",
  "Social Media Management",
  "Content Strategy & Copywriting",
  "AI Solutions & WhatsApp Agents",
  "Backend & API Development",
  "DevOps & Cloud Infrastructure",
  "Cybersecurity",
  "Technical Compliance Support",
  "Software Project Management",
  "MVP Development",
];
export type Project = {
  name: string;
  category: string;
  industry: string;
  image?: string;
  url?: string;
  deliverables: string[];
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
};
export const projects: Project[] = [
  {
    name: "Horace LMS",
    category: "EdTech · Web Platform",
    industry: "Education & Learning",
    image: "/assets/images/horace-showcase.png",
    url: "https://lms.horacelearning.com/",
    deliverables: ["Next.js Architecture", "MUI & TailwindCSS", "API Integration", "Role-Based Dashboards"],
    description:
      "A high-performance learning management ecosystem and interactive portal engineered for seamless course delivery, student tracking, and educator workflows.",
    challenge:
      "Legacy education tools struggled with sluggish navigation, complex content distribution, and poor mobile accessibility for thousands of concurrent learners.",
    approach:
      "Architected a Next.js and Material-UI frontend with optimized client-side state caching, streamlined navigation for educator portals, and accessible responsive interfaces.",
    outcome:
      "Significantly accelerated content load times and reduced operational friction for students, instructors, and administrators.",
  },
  {
    name: "Chrisema",
    category: "E-Commerce · Multi-Vendor",
    industry: "Marketplace & Retail",
    image: "/assets/images/chrisema-showcase.jpg",
    url: "https://chrisemart.com/",
    deliverables: ["Full-Stack Next.js", "TypeScript & Tailwind", "ShadCN UI", "Seller/Buyer Dashboards"],
    description:
      "A modern, verified marketplace platform tailored for buying and selling goods with dedicated, role-specific buyer and merchant portals.",
    challenge:
      "Facilitating secure transactions, dynamic inventory management, and dual-portal interfaces without cluttering user flows or slowing search performance.",
    approach:
      "Engineered reusable modular component architectures using ShadCN UI and TypeScript, paired with real-time API integrations for listings, order flows, and status tracking.",
    outcome:
      "Delivered an intuitive, frictionless marketplace experience that empowered sellers to manage storefronts independently and buyers to check out smoothly.",
  },
  {
    name: "CC Stays",
    category: "Hospitality · Direct Booking",
    industry: "Vacation Rentals & Travel",
    image: "/assets/images/ccstays-showcase.jpg",
    url: "https://ccstays.com/",
    deliverables: ["Headless WordPress & React", "Guesty PMS API", "Custom Booking Engine", "Dynamic Pricing"],
    description:
      "A luxury direct-booking hospitality portal integrated with Guesty PMS API, liberating property managers from high third-party OTA fees.",
    challenge:
      "Third-party booking platforms incurred steep commission fees while offering rigid branding, slow availability synchronization, and fragmented guest communication.",
    approach:
      "Built a bespoke direct-booking engine combining custom PHP/WordPress backend logic with dynamic React components, multi-calendar synchronization, and automated rate calculations.",
    outcome:
      "Eliminated intermediary booking commission fees while boosting direct revenue and providing real-time multi-channel availability.",
  },
  {
    name: "Silosuites",
    category: "Hospitality · Booking Engine",
    industry: "Luxury Accommodations",
    image: "/assets/images/silosuites-showcase.jpg",
    url: "https://silosuites.com/",
    deliverables: ["Custom Booking Plugin", "Stripe & SEPA Integration", "iCal Bi-Directional Sync", "Split Payments"],
    description:
      "A bespoke direct-booking ecosystem for premium vacation rentals featuring automated Stripe payment handling and dynamic split-deposit structures.",
    challenge:
      "Standard booking plugins lacked flexible deposit percentages (e.g., 60/40), automated security deposit pre-authorizations, and reliable two-way calendar sync.",
    approach:
      "Developed a custom WordPress plugin managing deposit schedules, Stripe card/SEPA transactions, pre-authorization holds without early capture, and bi-directional iCal feeds.",
    outcome:
      "Provided property owners with full autonomy over payment rules and completely prevented double-bookings across external OTAs.",
  },
  {
    name: "BOAJ Healthcare",
    category: "HealthTech · Patient Platform",
    industry: "Healthcare & Home Care",
    image: "/assets/images/boajcare-showcase.jpg",
    url: "https://www.boajcare.com/",
    deliverables: ["Next.js & TypeScript", "ShadCN UI & Tailwind", "HIPAA-Conscious UI", "Frictionless Inquiries"],
    description:
      "A trusted, accessible web platform for a US-based healthcare provider, designed for empathetic patient navigation and streamlined care inquiries.",
    challenge:
      "Patients and families seeking critical healthcare services often encountered intimidating, confusing service directories and cumbersome consultation request forms.",
    approach:
      "Structured a clear, comforting information hierarchy using accessible UI tokens, mobile-first layouts, and straightforward consultation pathways.",
    outcome:
      "Increased patient consultation requests and reduced support inquiry drop-offs through an approachable, accessible digital experience.",
  },
  {
    name: "The Course Masters",
    category: "EdTech · E-Learning",
    industry: "Professional Education",
    image: "/assets/images/the-course-masters-showcase.jpg",
    url: "https://thecoursemasters-frontend.vercel.app/",
    deliverables: ["UI/UX to Production Code", "Next.js & TailwindCSS", "Scalable Component Library", "API Integration"],
    description:
      "An educational platform translating tailored Figma design systems into performant, reusable code with interactive course dashboards.",
    challenge:
      "Bridging custom high-fidelity Figma prototypes into clean, modular code without losing micro-interactions or responsiveness across desktop and mobile devices.",
    approach:
      "Authored a clean, scalable component system using Next.js and TailwindCSS, delegating API logic efficiently and maintaining high lighthouse accessibility scores.",
    outcome:
      "Achieved seamless design-to-code fidelity, reducing subsequent feature development cycles and delighting course creators.",
  },
];
