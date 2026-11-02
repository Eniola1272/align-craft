function AboutHero() {
  return (
    <section className="split-hero grid-bg">
      <div className="wrap split">
        <div>
          <span className="eyebrow">About Align Craft</span>
          <h1>
            Somebody has to <strong>own the outcome.</strong>
          </h1>
          <p>
            Align Craft brings product thinking, design and engineering
            together. One clear direction, from the first conversation to the
            final handover.
          </p>
          <div className="buttons">
            <button className="btn primary" data-contact>
              Start a project <span>↗</span>
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
            aria-label="A classical torch with a lavender flame"
          >
            <defs>
              <linearGradient id="stone" x1="110" y1="0" x2="190" y2="300">
                <stop stopColor="#d6cce0"></stop>
                <stop offset=".5" stopColor="#61556e"></stop>
                <stop offset="1" stopColor="#221c2b"></stop>
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
              d="M120 113c-30-50 58-63 47-111 62 51 11 71 28 99-3 25-51 39-75 12Z"
              fill="#8b5cf6"
            ></path>
            <path
              d="M143 117c-21-35 30-44 26-77 30 35-3 54 10 68-5 20-25 24-36 9Z"
              fill="#c4b5fd"
            ></path>
            <path d="m111 119 17 37h47l22-37Z" fill="url(#stone)"></path>
            <path
              d="M106 117h96v10h-96ZM126 153h53v10h-53Zm10 12 8 129h17l8-129Z"
              fill="url(#stone)"
            ></path>
            <path
              d="m139 210-22 13-9 45-14 27 36 18 18-34 22-24-3-43-11-4-8 33-3-26Z"
              fill="url(#stone)"
            ></path>
            <path
              d="m145 221 20 7m-22 4 20 7m-22 4 19 7"
              stroke="#d6cce0"
              opacity=".6"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

function OperatingContext() {
  return (
    <section className="section tint">
      <div className="wrap split">
        <div className="intro">
          <h2>
            We get software into production
            <br />
            <strong>with a clear plan.</strong>
          </h2>
          <p>
            Too many projects fall between handoffs: designer to developer,
            developer to infrastructure, until the founder becomes the project
            manager.
          </p>
          <p>
            <strong>Our approach connects those disciplines.</strong> A shared
            plan keeps decisions, delivery and the product outcome aligned.
          </p>
        </div>
        <div className="context dark">
          <span className="eyebrow">Our operating principle</span>
          <h2>
            Built with intention.
            <br />
            <strong className="accent">Built for production.</strong>
          </h2>
          <p>
            We work from the reality of your business: how customers pay, how
            teams operate and what the product needs to do when real people
            depend on it.
          </p>
        </div>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section className="section" id="standards">
      <div className="wrap">
        <span className="eyebrow">How we operate</span>
        <h2>
          The standards behind <strong>the work.</strong>
        </h2>
        <div className="standards">
          <div className="standard">
            <h3>Clarity before code</h3>
            <p>Outcome, scope, price and ownership before the build starts.</p>
          </div>
          <div className="standard">
            <h3>Speed with quality</h3>
            <p>
              Momentum comes from clear decisions and a dependable foundation.
            </p>
          </div>
          <div className="standard">
            <h3>Visible scope changes</h3>
            <p>New work gets a written impact on price and timeline.</p>
          </div>
          <div className="standard">
            <h3>Production readiness</h3>
            <p>
              QA, release, credentials, documentation and known limitations.
            </p>
          </div>
          <div className="standard">
            <h3>Security &amp; privacy</h3>
            <p>Access limited to what the work requires.</p>
          </div>
          <div className="standard">
            <h3>Handover you can run</h3>
            <p>
              You should have the knowledge and documentation to operate what
              ships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliveryRoles() {
  return (
    <section className="section tint" id="team">
      <div className="wrap">
        <span className="eyebrow">Accountability by design</span>
        <h2>
          Named owners for
          <br />
          <strong>every engagement.</strong>
        </h2>
        <p>
          The roles your product needs, with responsibilities agreed before work
          begins.
        </p>
        <div className="roles">
          <div className="role">
            <div className="role-number">01</div>
            <h3>Product lead</h3>
            <p>Keeps the outcome, priorities and delivery plan connected.</p>
          </div>
          <div className="role">
            <div className="role-number">02</div>
            <h3>Product designer</h3>
            <p>
              Turns user needs into clear journeys and considered interfaces.
            </p>
          </div>
          <div className="role">
            <div className="role-number">03</div>
            <h3>Frontend engineer</h3>
            <p>
              Brings the experience to life across devices and screen sizes.
            </p>
          </div>
          <div className="role">
            <div className="role-number">04</div>
            <h3>Backend engineer</h3>
            <p>
              Owns the systems, data and integrations behind the experience.
            </p>
          </div>
          <div className="role">
            <div className="role-number">05</div>
            <h3>Delivery lead</h3>
            <p>
              Keeps communication clear, dependencies visible and the handover
              useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioDetails() {
  return (
    <section className="section">
      <div className="wrap ledger">
        <h2>
          A closer look at <strong>Align Craft.</strong>
        </h2>
        <div className="ledger-row">
          <span>Studio</span>
          <span>Align Craft</span>
        </div>
        <div className="ledger-row">
          <span>Focus</span>
          <span>Product strategy, design &amp; engineering</span>
        </div>
        <div className="ledger-row">
          <span>Engagement model</span>
          <span>Defined delivery phases</span>
        </div>
        <div className="ledger-row">
          <span>Collaboration</span>
          <span>One shared plan and clear ownership</span>
        </div>
        <div className="ledger-row">
          <span>Handover</span>
          <span>Source, documentation &amp; knowledge transfer</span>
        </div>
      </div>
    </section>
  );
}

export default function AboutContent() {
  return (
    <>
      <AboutHero />
      <OperatingContext />
      <Standards />
      <DeliveryRoles />
      <StudioDetails />
    </>
  );
}
