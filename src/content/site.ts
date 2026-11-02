export const contactEmail = "contact@aligncraft.com.ng";
export const services: string[] = [
  "Mobile App Development",
  "SaaS & Web App Development",
  "AI Solutions & WhatsApp Agents",
  "Backend & API Development",
  "Website Development",
  "UI/UX & Product Design",
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
  deliverables: string[];
  description: string;
  challenge: string;
  approach: string;
  outcome: string;
};
export const projects: Project[] = [
  {
    name: "Forma",
    category: "SaaS · Product design",
    industry: "Work & productivity",
    deliverables: ["Product strategy", "UI/UX design", "Design system"],
    description:
      "A workspace concept that gives small teams a shared view of projects and progress, with the next action close at hand.",
    challenge:
      "Project updates spread across separate tools make it hard to see what needs attention. This concept brings the essentials into one workspace.",
    approach:
      "A compact navigation system leads into a project overview. Consistent status labels and progress indicators help people move between the big picture and individual tasks.",
    outcome:
      "Help a small team understand where work stands and decide what to do next.",
  },
  {
    name: "Gather",
    category: "Commerce · Web design",
    industry: "Home & lifestyle",
    deliverables: ["Creative direction", "E-commerce UX", "Website design"],
    description:
      "A homeware storefront concept that gives products room to tell their story while keeping the collection easy to browse.",
    challenge:
      "A small collection needs a distinctive presentation and a straightforward shopping experience. The product story and the route to purchase have to work together.",
    approach:
      "Generous product framing sets the tone. Restrained navigation and a simple collection structure keep attention on the objects and the next step into the catalogue.",
    outcome:
      "Help customers understand the collection and find a product that interests them.",
  },
  {
    name: "Mono",
    category: "Fintech · Mobile design",
    industry: "Personal finance",
    deliverables: ["Mobile UX", "Interface design", "Interactive prototype"],
    description:
      "A mobile wallet concept that puts balances, payments and recent activity within easy reach, so everyday money tasks are easier to follow.",
    challenge:
      "A wallet needs to make the important information clear without crowding a small screen. People should be able to distinguish account status from actions they can take.",
    approach:
      "The balance has a clear place in the hierarchy. Direct payment actions and readable activity rows give the core journeys a consistent structure. All account data shown is illustrative.",
    outcome:
      "Make it easier to understand the account and choose the next payment action.",
  },
  {
    name: "Fieldwork",
    category: "Operations · Platform design",
    industry: "Field services",
    deliverables: ["Workflow mapping", "Dashboard UX", "Interface design"],
    description:
      "An operations concept that puts schedules and team locations in the same workspace, giving field and office teams a shared view of the day.",
    challenge:
      "Coordinating jobs becomes difficult when the schedule and field updates live in different places. Teams need a common view of what is happening.",
    approach:
      "The schedule sits beside a map, with explicit status labels and a clear hierarchy for time-sensitive jobs. The locations and schedules are sample data.",
    outcome:
      "Help teams connect a job’s status with its place in the day’s schedule.",
  },
  {
    name: "Petal",
    category: "Lifestyle · E-commerce",
    industry: "Plants & interiors",
    deliverables: ["Art direction", "Shopping experience", "Responsive design"],
    description:
      "A plant-shop concept that pairs approachable product names with care cues, helping first-time owners find a place to start.",
    challenge:
      "A first-time plant owner may not know what to choose. The shopping experience needs to introduce the collection without assuming specialist knowledge.",
    approach:
      "Plain-language product names and an inviting collection layout make the range approachable. Care cues give people useful context as they browse.",
    outcome:
      "Help someone identify a plant they want to learn more about and understand the care involved.",
  },
  {
    name: "Formly",
    category: "No-code · Product design",
    industry: "Research & feedback",
    deliverables: ["Product UX", "Builder interface", "Design system"],
    description:
      "A form-builder concept that keeps the question outline and respondent’s view together, making editing decisions easier to judge.",
    challenge:
      "Form builders can separate the editing controls from the experience people will receive. This concept keeps both in view.",
    approach:
      "A question outline provides structure, the editing canvas shows the result, and a clear publishing action marks the next step. Each area has a distinct job.",
    outcome:
      "Help people understand how their questions fit together before publishing.",
  },
];
