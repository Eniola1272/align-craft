import Link from "next/link";
import { RotatingAudience } from "@/components/rotating-audience";
import { ProjectCard } from "@/components/project-card";
import { contactEmail } from "@/content/site";
import { notes } from "@/content/journal";

const offerings = [
  {
    title: "Website design & development",
    description:
      "Give customers a clear reason to choose your business. We shape the content and design, then build a fast, accessible website that makes it easy to understand your offer and take the next step.",
    deliverables: "Content structure · Interface design · Responsive website",
    service: "Website Development",
    shape: "website",
  },
  {
    title: "Digital product design",
    description:
      "Make the important decisions before they become expensive to change. We map user journeys, prototype the difficult parts and design a consistent interface your development team can build from.",
    deliverables: "User journeys · Interactive prototypes · Design systems",
    service: "UI/UX & Product Design",
    shape: "design",
  },
  {
    title: "Software development",
    description:
      "Put dependable engineering behind the experience. We build web platforms, mobile apps and APIs in reviewable stages, so you can see how the product works as it takes shape.",
    deliverables: "Web & mobile applications · APIs · Testing & release",
    service: "SaaS & Web App Development",
    shape: "code",
  },
  {
    title: "Connected systems & automation",
    description:
      "Give your team fewer tasks to do by hand. We connect existing tools and build focused automations around the work, with AI where it serves a clear purpose.",
    deliverables: "System integrations · Workflow automation · Internal tools",
    service: "AI Solutions & WhatsApp Agents",
    shape: "systems",
  },
];
const phases = [
  {
    title: "Discover",
    text: "We work through user needs, business priorities and technical constraints. You get an agreed scope and a clear definition of what the phase must deliver.",
    output: "Scope & acceptance criteria",
  },
  {
    title: "Design",
    text: "We map the journeys and prototype the experience. You can review the important interactions before they become development decisions.",
    output: "Approved journeys & interface",
  },
  {
    title: "Build",
    text: "We develop the approved experience in manageable stages. Regular reviews give you working software to assess and specific decisions to make.",
    output: "Working software to review",
  },
  {
    title: "Test",
    text: "We check real workflows, accessibility and edge cases against the agreed scope. The team can address issues before the release reaches users.",
    output: "A checked release",
  },
  {
    title: "Launch",
    text: "We deploy the product and complete the agreed handover. Your team gets the source, access and documentation needed to operate what we’ve built.",
    output: "Release & documented handover",
  },
];
const questions = [
  [
    "Is Align Craft the right fit for our project?",
    "We work with founders and businesses who want design and engineering considered together. You may need a new product, a better experience for an existing one, or a website that represents the business properly. We start by agreeing what the work needs to achieve.",
  ],
  [
    "Do we need a finished brief before we speak?",
    "No. Bring what you know about the business, the users and the problem. Discovery helps us work through the unknowns and define a useful first phase. A finished specification is not a prerequisite for that conversation.",
  ],
  [
    "Can you work on an existing website or product?",
    "Yes. We can review the current experience and technical setup, then agree which improvements matter most. Share the product and tell us where customers or your team are running into difficulty.",
  ],
  [
    "How do you scope and price the work?",
    "We understand the requirements before quoting a defined phase. Your proposal sets out the deliverables, fee, milestones and acceptance criteria. If the scope changes, we discuss the effect on price and timing before proceeding.",
  ],
  [
    "How much of our time will you need?",
    "We agree review points and the decisions that need your input at the start. You’ll see progress throughout the phase, with specific feedback requests so your team can make decisions and keep the work moving.",
  ],
  [
    "What will we receive at handover?",
    "Your proposal defines the source files, account access and documentation included in the handover, along with ownership terms and any warranty. Ongoing maintenance and future improvements can be scoped separately.",
  ],
];
function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="studio-section-label">
      <span>{number} /</span> {children}
    </div>
  );
}
function Hero() {
  return (
    <section className="studio-hero" aria-labelledby="hero-heading">
      <div className="studio-hero-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/ui-ux-design-monitor.jpg"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
      <div className="studio-hero-overlay" aria-hidden="true" />
      <div className="wrap studio-hero-content">
        <div className="studio-hero-top-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          <span>Next-Gen Design &amp; Software Studio</span>
        </div>

        <div className="studio-hero-main-row">
          <div className="studio-hero-headline-col">
            <h1 id="hero-heading">
              Beautifully
              <br />
              built.
              <RotatingAudience />
            </h1>
          </div>

          <div className="studio-hero-aside-col">
            <p className="studio-hero-lead">
              We design and build websites, web platforms and mobile apps for
              founders and businesses. You get a considered interface, a clear
              delivery plan and software your team can take forward.
            </p>
            <div className="studio-hero-actions">
              <button className="btn primary hero-btn-solid" data-contact>
                Start a project <span aria-hidden="true">↗</span>
              </button>
              <a className="btn hero-btn-outline" href="#work">
                Explore our work <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="studio-hero-bottom-bar">
          <div className="studio-hero-tags" aria-hidden="true">
            <span>+ Define</span>
            <span>+ Design</span>
            <span>+ Development</span>
          </div>
          <div className="studio-hero-slogan">
            <span>Clarity. Craft. Forward.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function SelectedWork() {
  return (
    <section
      className="studio-section studio-work"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="wrap">
        <SectionLabel number="01">Selected explorations</SectionLabel>
        <div className="studio-section-heading">
          <h2 id="work-heading">
            The decisions
            <br />
            <em>behind the design.</em>
          </h2>
          <p>
            Explore the user problem, the interface and the reasoning behind
            each concept. These are original studio studies, not commissioned
            client projects or measured results.
          </p>
        </div>
        <div className="studio-project-grid">
          {[0, 1, 2, 3].map((index) => (
            <ProjectCard key={index} index={index} />
          ))}
        </div>
        <details className="more-studies">
          <summary>
            Explore two more concepts <span>Petal &amp; Formly</span>
          </summary>
          <div className="studio-project-grid">
            {[4, 5].map((index) => (
              <ProjectCard key={index} index={index} />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
function ServiceGraphic({ kind }: { kind: string }) {
  return (
    <svg
      className="service-graphic"
      viewBox="0 0 96 76"
      fill="none"
      aria-hidden="true"
    >
      {kind === "website" ? (
        <>
          <rect x="10" y="12" width="76" height="52" rx="2" />
          <path d="M10 25h76M22 36h24m-24 8h16m-16 8h22" />
          <rect
            x="57"
            y="35"
            width="17"
            height="17"
            fill="currentColor"
            fillOpacity=".12"
          />
        </>
      ) : kind === "design" ? (
        <>
          <path d="M18 18h60v40H18zM11 11h14v14H11zm60 0h14v14H71zM11 51h14v14H11zm60 0h14v14H71z" />
          <circle
            cx="48"
            cy="38"
            r="12"
            fill="currentColor"
            fillOpacity=".12"
          />
        </>
      ) : kind === "code" ? (
        <>
          <path d="m32 23-18 15 18 15m32-30 18 15-18 15M55 14 41 62" />
        </>
      ) : (
        <>
          <rect x="8" y="28" width="22" height="22" rx="3" />
          <rect x="66" y="8" width="22" height="22" rx="3" />
          <rect x="66" y="48" width="22" height="22" rx="3" />
          <path d="M30 39h18V19h18M48 39v20h18" />
        </>
      )}
    </svg>
  );
}
function Services() {
  return (
    <section
      className="studio-section studio-services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="wrap studio-services-layout">
        <div className="studio-services-intro">
          <SectionLabel number="02">What we do</SectionLabel>
          <h2 id="services-heading">
            What your
            <br />
            product needs
            <br />
            <em>to work well.</em>
          </h2>
          <p>
            Work with us on a specific part of the product or the full design
            and build. We agree the responsibilities and deliverables before the
            work starts.
          </p>
          <Link className="studio-underlink" href="/pricing">
            Scope, phases &amp; pricing <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="studio-service-list">
          {offerings.map((o, i) => (
            <article
              className="studio-service"
              id={`service-${i + 1}`}
              key={o.service}
            >
              <span className="service-number">0{i + 1}</span>
              <div>
                <h3>{o.title}</h3>
                <p>{o.description}</p>
                <span className="service-deliverables">{o.deliverables}</span>
                <button
                  className="studio-underlink"
                  data-contact
                  data-service={o.service}
                >
                  Discuss this work <span aria-hidden="true">↗</span>
                </button>
              </div>
              <ServiceGraphic kind={o.shape} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Difference() {
  return (
    <section
      className="studio-section studio-difference"
      aria-labelledby="difference-heading"
    >
      <div className="wrap">
        <SectionLabel number="03">Why work with Align Craft</SectionLabel>
        <div className="studio-difference-grid">
          <div>
            <h2 id="difference-heading">
              Design and engineering,
              <br />
              <em>working together.</em>
            </h2>
            <p className="studio-difference-lede">
              You get one team that can discuss the user journey and the
              technical tradeoffs in the same conversation. Decisions stay
              connected as the product moves from design into code.
            </p>
            <Link className="studio-underlink" href="/about">
              How we work <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="studio-practices">
            {[
              [
                "Decisions you can act on",
                "We explain the options and their effect on scope, time and the user experience. You can make informed calls while the work is still easy to change.",
              ],
              [
                "Progress you can review",
                "You see the work at agreed review points, with clear feedback requests. Your input shapes the next iteration, and scope changes stay visible.",
              ],
              [
                "A product you can take forward",
                "We plan the handover alongside the build. Source code, account access and useful documentation help your team operate the product and decide what comes next.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="studio-tooling">
          <span>Tools we build with</span>
          <ul>
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Figma",
            ].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p>
            Chosen around the product’s
            <br />
            requirements and constraints.
          </p>
        </div>
      </div>
    </section>
  );
}
function Process() {
  return (
    <section
      className="studio-section studio-process"
      id="process"
      aria-labelledby="process-heading"
    >
      <div className="wrap">
        <SectionLabel number="04">From question to launch</SectionLabel>
        <div className="studio-section-heading">
          <h2 id="process-heading">
            Know what’s next.
            <br />
            <em>Know what you’re getting.</em>
          </h2>
          <p>
            Each stage gives you something to review and a decision to make. We
            agree what “done” means before the phase begins.
          </p>
        </div>
        <ol className="studio-timeline">
          {phases.map((phase, i) => (
            <li key={phase.title}>
              <span className="timeline-node">0{i + 1}</span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
              <span className="timeline-output">{phase.output}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
function FrequentlyAskedQuestions() {
  return (
    <section
      className="studio-section studio-faq"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="wrap studio-faq-layout">
        <div>
          <SectionLabel number="05">Before we begin</SectionLabel>
          <h2 id="faq-heading">
            Before you
            <br />
            <em>commit.</em>
          </h2>
          <p>Ask us about the part you’re still weighing up.</p>
          <a className="studio-underlink" href={`mailto:${contactEmail}`}>
            {contactEmail} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="studio-questions">
          {questions.map(([q, a]) => (
            <details name="studio-faq" key={q}>
              <summary>{q}</summary>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </details>
          ))}
          <Link className="studio-underlink" href="/pricing">
            More about pricing <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
function Insights() {
  return (
    <section
      className="studio-section studio-journal"
      id="insights"
      aria-labelledby="journal-heading"
    >
      <div className="wrap">
        <SectionLabel number="06">Notes from the studio</SectionLabel>
        <div className="studio-section-heading">
          <h2 id="journal-heading">
            Make the call
            <br />
            <em>with more context.</em>
          </h2>
          <p>
            Notes on scope, delivery and the decisions that affect the finished
            product.
          </p>
        </div>
        <div className="studio-journal-grid">
          {notes.map((note, i) => (
            <article
              className={`journal-entry journal-entry-${i}`}
              key={note.title}
            >
              <div className="journal-cover" aria-hidden="true">
                {i === 0 ? (
                  <div className="journal-scope">
                    <span>THE FIRST RELEASE</span>
                    <b>
                      Less,
                      <br />
                      <em>but complete.</em>
                    </b>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                ) : i === 1 ? (
                  <div className="journal-code">
                    <span>OWNERSHIP / 02</span>
                    <pre>
                      {
                        "source/\n  components/\n  documentation/\n  next-steps.md"
                      }
                    </pre>
                    <b>
                      Built.
                      <br />
                      And handed over.
                    </b>
                  </div>
                ) : (
                  <div className="journal-phase">
                    <span>ONE USEFUL PHASE</span>
                    <div>
                      <i>01</i>
                      <span>→</span>
                      <i>02</i>
                      <span>→</span>
                      <i>03</i>
                    </div>
                    <b>
                      Make the
                      <br />
                      next move clear.
                    </b>
                  </div>
                )}
              </div>
              <div className="journal-meta">
                <span>{note.category}</span>
                <span>Studio note / 0{i + 1}</span>
              </div>
              <h3>
                <button data-article={i}>{note.title}</button>
              </h3>
              <p>{note.description}</p>
              <button className="studio-underlink" data-article={i}>
                Read the note <span aria-hidden="true">↗</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function HomeContent() {
  return (
    <div className="studio-home">
      <Hero />
      <SelectedWork />
      <Services />
      <Difference />
      <Process />
      <FrequentlyAskedQuestions />
      <Insights />
    </div>
  );
}
