function PricingHero() {
  return (
    <section className="split-hero grid-bg">
      <div className="wrap split">
        <div>
          <span className="eyebrow">Pricing</span>
          <h1>
            We quote a phase <strong>after discovery.</strong>
          </h1>
          <p>
            Software is not sold from a menu. After a short discovery, we scope
            a controlled phase around your outcome, platforms, integrations and
            risk.
          </p>
          <div className="buttons">
            <button className="btn primary" data-contact>
              Get a phase quote <span>↗</span>
            </button>
            <a className="btn" href="/#work">
              View our work <span>↗</span>
            </a>
          </div>
        </div>
        <div className="sculpture">
          <svg
            viewBox="0 0 300 320"
            fill="none"
            aria-label="A classical balance scale"
          >
            <defs>
              <linearGradient
                id="metal"
                x1="90"
                y1="0"
                x2="230"
                y2="250"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ddd6e8"></stop>
                <stop offset=".4" stopColor="#655874"></stop>
                <stop offset=".55" stopColor="#c2aecf"></stop>
                <stop offset="1" stopColor="#31283d"></stop>
              </linearGradient>
            </defs>
            <circle
              cx="150"
              cy="145"
              r="125"
              fill="#8b5cf6"
              opacity=".06"
            ></circle>
            <path
              d="m150 40 0 223M55 85q95 30 190 0"
              stroke="url(#metal)"
              strokeWidth="12"
            ></path>
            <circle cx="150" cy="35" r="12" fill="url(#metal)"></circle>
            <path
              d="m55 88-35 100m35-100 35 100m155-100-35 100m35-100 35 100"
              stroke="#62536e"
              strokeWidth="2"
            ></path>
            <path
              d="M15 188q40 47 80 0ZM205 188q40 47 80 0Z"
              fill="url(#metal)"
            ></path>
            <path d="m137 92-5 167h36l-5-167Z" fill="url(#metal)"></path>
            <path
              d="m132 259-24 21h84l-24-21ZM100 282h100l12 16H88Z"
              fill="url(#metal)"
            ></path>
            <circle cx="150" cy="85" r="8" fill="#8b5cf6"></circle>
          </svg>
        </div>
      </div>
    </section>
  );
}

function DeliveryPhases() {
  return (
    <section className="section" id="phases">
      <div className="wrap">
        <span className="eyebrow">Clear scope. Clear next steps.</span>
        <h2>
          Core delivery <strong>phases.</strong>
        </h2>
        <p>
          Each line is a typical phase shape. The commercial quote comes after
          we understand what “done” means for your product.
        </p>
        <details className="phase">
          <summary>
            <div>
              <h3>Mobile App Development</h3>
              <small>
                Thoughtful iOS and Android experiences, from first prototype to
                the app stores.
              </small>
              <small className="quote-label">
                Quoted after a short discovery
              </small>
            </div>
            <em>4–8 week phase</em>
          </summary>
          <p>
            We agree your priorities, map the key user journeys and define the
            technical approach. Your proposal includes specific deliverables,
            acceptance criteria, dependencies and a handover plan for mobile app
            development.
          </p>
        </details>
        <details className="phase">
          <summary>
            <div>
              <h3>SaaS &amp; Web App Development</h3>
              <small>
                Multi-user platforms, dashboards and SaaS products built around
                real workflows.
              </small>
              <small className="quote-label">
                Quoted after a short discovery
              </small>
            </div>
            <em>4–8 week phase</em>
          </summary>
          <p>
            We agree your priorities, map the key user journeys and define the
            technical approach. Your proposal includes specific deliverables,
            acceptance criteria, dependencies and a handover plan for saas &amp;
            web app development.
          </p>
        </details>
        <details className="phase">
          <summary>
            <div>
              <h3>AI Solutions &amp; WhatsApp Agents</h3>
              <small>
                Useful automation, conversational experiences and connected
                business systems.
              </small>
              <small className="quote-label">
                Quoted after a short discovery
              </small>
            </div>
            <em>4–8 week phase</em>
          </summary>
          <p>
            We agree your priorities, map the key user journeys and define the
            technical approach. Your proposal includes specific deliverables,
            acceptance criteria, dependencies and a handover plan for ai
            solutions &amp; whatsapp agents.
          </p>
        </details>
        <details className="phase">
          <summary>
            <div>
              <h3>Backend &amp; API Development</h3>
              <small>
                Reliable application logic, integrations and infrastructure that
                hold everything together.
              </small>
              <small className="quote-label">
                Quoted after a short discovery
              </small>
            </div>
            <em>4–8 week phase</em>
          </summary>
          <p>
            We agree your priorities, map the key user journeys and define the
            technical approach. Your proposal includes specific deliverables,
            acceptance criteria, dependencies and a handover plan for backend
            &amp; api development.
          </p>
        </details>
        <details className="phase">
          <summary>
            <div>
              <h3>Website Development</h3>
              <small>
                Fast, expressive websites that turn a clear story into a
                compelling experience.
              </small>
              <small className="quote-label">
                Quoted after a short discovery
              </small>
            </div>
            <em>4–8 week phase</em>
          </summary>
          <p>
            We agree your priorities, map the key user journeys and define the
            technical approach. Your proposal includes specific deliverables,
            acceptance criteria, dependencies and a handover plan for website
            development.
          </p>
        </details>
        <details className="phase">
          <summary>
            <div>
              <h3>Digital Marketing, Social Media &amp; Content Strategy</h3>
              <small>
                Audience acquisition, social channels, and high-converting content
                narratives to scale your product.
              </small>
              <small className="quote-label">
                Ongoing monthly or defined campaign phase
              </small>
            </div>
            <em>4–12 week phase</em>
          </summary>
          <p>
            We identify your highest-value channels, craft editorial content
            calendars, and execute social campaigns and technical SEO to turn
            passive visitors into engaged, paying customers.
          </p>
        </details>
      </div>
    </section>
  );
}

function PhaseTypes() {
  return (
    <section className="section">
      <div className="wrap split">
        <div className="intro">
          <h2>
            The unit of work is <strong>a phase.</strong>
          </h2>
          <p>We price a delivery commitment with a clear outcome.</p>
        </div>
        <div className="hairline-grid">
          <div className="hairline-cell">
            <h3>Focused Build Phase</h3>
            <small>4–8 weeks</small>
            <p>
              A defined product outcome, designed, engineered, tested and handed
              over.
            </p>
          </div>
          <div className="hairline-cell">
            <h3>Launch-Ready MVP</h3>
            <small>Quoted after discovery</small>
            <p>
              The smallest credible version of the product that can reach real
              users.
            </p>
          </div>
          <div className="hairline-cell">
            <h3>Continuation Phase</h3>
            <small>Quoted after discovery</small>
            <p>
              A second or later phase after the core workflow is already in
              production.
            </p>
          </div>
          <div className="hairline-cell">
            <h3>Specialist Support</h3>
            <small>Agreed engagement</small>
            <p>
              Design, security, infrastructure or project management where the
              risk requires it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeeBreakdown() {
  return (
    <section className="section tint">
      <div className="wrap split">
        <div className="intro">
          <h2>
            What the fee is <strong>paying for.</strong>
          </h2>
          <p>
            Exact scope changes by phase. Third-party fees and specialist work
            are included only when the proposal says so.
          </p>
        </div>
        <div>
          <div className="hairline-grid">
            <div className="hairline-cell">
              <p>✓  Discovery, scope and acceptance criteria</p>
            </div>
            <div className="hairline-cell">
              <p>✓  Product / UI design where scoped</p>
            </div>
            <div className="hairline-cell">
              <p>✓  Engineering across agreed platforms</p>
            </div>
            <div className="hairline-cell">
              <p>✓  Project management and status updates</p>
            </div>
            <div className="hairline-cell">
              <p>✓  QA, UAT support and release preparation</p>
            </div>
            <div className="hairline-cell">
              <p>✓  Documentation, handover and contracted warranty</p>
            </div>
          </div>
          <div className="tags">
            <button className="btn" data-contact>
              UI/UX &amp; Product Design ↗
            </button>
            <button className="btn" data-contact>
              DevOps &amp; Cloud Infrastructure ↗
            </button>
            <button className="btn" data-contact>
              Cybersecurity ↗
            </button>
            <button className="btn" data-contact>
              Technical Compliance Support ↗
            </button>
            <button className="btn" data-contact>
              Software Project Management ↗
            </button>
            <button className="btn" data-contact>
              MVP Development ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteDrivers() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>
          What moves <strong>the quote.</strong>
        </h2>
        <div className="drivers">
          <div className="driver">
            <h3>Platforms</h3>
            <p>Web, mobile, or both change the workload.</p>
          </div>
          <div className="driver">
            <h3>Complexity</h3>
            <p>Roles, payments, workflows and admin systems add effort.</p>
          </div>
          <div className="driver">
            <h3>Integrations</h3>
            <p>External services add dependencies and risk.</p>
          </div>
          <div className="driver">
            <h3>Starting point</h3>
            <p>
              An approved design is a different starting point from an idea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhaseSequence() {
  return (
    <section className="section dark">
      <div className="wrap">
        <div className="center-callout">
          <h2>
            Large products become a<br />
            <strong>sequence of phases.</strong>
          </h2>
          <p>
            If the full product cannot fit one phase, we split it into
            deliverable outcomes. Each has its own scope, acceptance evidence
            and commercial terms.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingQuestions() {
  return (
    <section className="section tint">
      <div className="wrap faq-wrap">
        <h2>
          Pricing <strong>questions.</strong>
        </h2>
        <details>
          <summary>Do I need to know my budget before contacting you?</summary>
          <p>
            A budget range is helpful, but a clear product problem is a good
            starting point. We can discuss priorities and shape a realistic
            first phase together.
          </p>
        </details>
        <details>
          <summary>Is the range the final quote?</summary>
          <p>
            No. Timelines describe typical planning windows. Your written
            proposal confirms the exact scope, fee, timeline and acceptance
            criteria after discovery.
          </p>
        </details>
        <details>
          <summary>How are payments structured?</summary>
          <p>
            Payment milestones are agreed in your proposal before work begins.
            They are tied to the specific delivery phase and its commercial
            terms.
          </p>
        </details>
        <details>
          <summary>
            Do third-party fees come out of the development fee?
          </summary>
          <p>
            Hosting, paid APIs, app store accounts and other external services
            are separate unless the proposal explicitly includes them.
          </p>
        </details>
        <details>
          <summary>
            What happens when I request new features after scope is signed?
          </summary>
          <p>
            We assess the effect on price and timeline, then agree a scope
            change or move the feature into a later phase.
          </p>
        </details>
        <details>
          <summary>Is maintenance included forever?</summary>
          <p>
            No. The handover and any contracted warranty are defined in the
            proposal. Continuing support can be scoped separately.
          </p>
        </details>
      </div>
    </section>
  );
}

export default function PricingContent() {
  return (
    <>
      <PricingHero />
      <DeliveryPhases />
      <PhaseTypes />
      <FeeBreakdown />
      <QuoteDrivers />
      <PhaseSequence />
      <PricingQuestions />
    </>
  );
}
