/** Editable interface studies. Every screen is illustrative studio work. */
function WindowBar({ address }: { address: string }) {
  return (
    <div className="study-window-bar">
      <span className="window-dots">
        <i />
        <i />
        <i />
      </span>
      <span>{address}</span>
      <span>↗</span>
    </div>
  );
}
function ProductObject({ kind = 0 }: { kind?: number }) {
  return (
    <svg className="product-object" viewBox="0 0 160 160" fill="none">
      <ellipse
        cx="80"
        cy="139"
        rx="43"
        ry="7"
        fill="currentColor"
        opacity=".08"
      />
      {kind % 3 === 0 ? (
        <>
          <path
            d="M62 25h36v28c0 13 29 22 29 49 0 26-15 35-47 35s-47-9-47-35c0-27 29-36 29-49Z"
            fill="currentColor"
          />
          <ellipse
            cx="80"
            cy="26"
            rx="18"
            ry="5"
            fill="#ffffff"
            opacity=".45"
          />
          <path
            d="M58 73c-13 16-16 35-4 48"
            stroke="white"
            strokeOpacity=".25"
            strokeWidth="4"
          />
        </>
      ) : kind % 3 === 1 ? (
        <>
          <path
            d="M30 77h100c-3 41-19 59-50 59S33 118 30 77Z"
            fill="currentColor"
          />
          <ellipse cx="80" cy="77" rx="50" ry="14" fill="currentColor" />
          <ellipse cx="80" cy="75" rx="42" ry="8" fill="#fff" opacity=".35" />
        </>
      ) : (
        <>
          <path d="M48 61h64v72H48Z" fill="currentColor" />
          <ellipse cx="80" cy="61" rx="32" ry="10" fill="currentColor" />
          <ellipse cx="80" cy="59" rx="27" ry="7" fill="#f4eee5" />
          <path d="M80 53V43" stroke="#524235" strokeWidth="2" />
          <rect
            x="62"
            y="86"
            width="36"
            height="25"
            fill="#f4eee5"
            opacity=".7"
          />
        </>
      )}
    </svg>
  );
}
function FormaStudy() {
  return (
    <div className="study-stage study-forma" aria-hidden="true">
      <div className="forma-window">
        <WindowBar address="portal.horacelearning.com / lms" />
        <div className="forma-layout">
          <aside className="forma-sidebar">
            <span className="forma-logo">
              h<span>horace</span>
            </span>
            <span className="study-workspace">
              Learning Portal <span>⌄</span>
            </span>
            <div className="study-nav-item selected">▦ &nbsp; Courses</div>
            <div className="study-nav-item">
              □ &nbsp; Curriculum <small>18</small>
            </div>
            <div className="study-nav-item">◷ &nbsp; Assessments</div>
            <div className="study-nav-item">↗ &nbsp; Resources</div>
            <div className="study-sidebar-bottom">
              <span className="study-avatar">HL</span>
              <span>
                Horace Learning<small>Enterprise LMS</small>
              </span>
            </div>
          </aside>
          <div className="forma-main">
            <div className="study-topline">
              <span>
                LMS <span>/ Student Dashboard</span>
              </span>
              <span>⌕ &nbsp; ◉</span>
            </div>
            <div className="forma-greeting">
              <div>
                <span className="study-overline">FALL SEMESTER • ACTIVE</span>
                <h4>
                  Accelerated learning.
                  <br />Intuitive course delivery.
                </h4>
              </div>
              <span className="study-add">+ New Module</span>
            </div>
            <div className="forma-stats">
              <div>
                <span>Enrolled Students</span>
                <b>
                  1.4k<small>active</small>
                </b>
                <i className="stat-rule" />
              </div>
              <div>
                <span>Avg Completion</span>
                <b>
                  94%<small>rate</small>
                </b>
                <i className="stat-rule green" />
              </div>
              <div>
                <span>Courses Online</span>
                <b>
                  24<small>published</small>
                </b>
                <i className="stat-rule orange" />
              </div>
            </div>
            <div className="forma-projects">
              <div className="study-panel-heading">
                <b>Active Modules</b>
                <span>View all ↗</span>
              </div>
              {[
                ["Product Strategy & UX", "Interactive Lab", "82%"],
                ["Full-Stack Engineering", "Code Reviews", "65%"],
                ["Digital Leadership", "Case Studies", "90%"],
              ].map(([name, phase, width], i) => (
                <div className="forma-project-row" key={name}>
                  <span className={`study-project-icon icon-${i}`}>
                    {["◒", "↗", "▤"][i]}
                  </span>
                  <span className="study-project-title">
                    {name}
                    <small>{phase}</small>
                  </span>
                  <span className="study-progress">
                    <i style={{ width }} />
                  </span>
                  <span className="study-avatar avatar-soft">
                    {["HL", "ED", "ST"][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="forma-bottom">
              <span>
                <i /> Live synchronisation enabled.
              </span>
              <span>Built with Next.js &amp; Material-UI.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function GatherStudy() {
  return (
    <div className="study-stage study-gather" aria-hidden="true">
      <div className="gather-page">
        <div className="gather-notice">
          Verified Marketplace. Direct Buyer &amp; Seller Portals.
        </div>
        <div className="gather-nav">
          <b>
            chrisema<span>™</span>
          </b>
          <span>Catalogue &nbsp; Deals</span>
          <span>Cart (0)</span>
        </div>
        <div className="gather-feature">
          <div>
            <span className="study-overline">VERIFIED SECONDARY COMMERCE</span>
            <h4>
              Smart trades.
              <br />
              Seamless
              <br />
              <em>checkouts.</em>
            </h4>
            <span className="gather-shop">Explore Marketplace ↗</span>
          </div>
          <div className="gather-feature-object">
            <ProductObject />
            <span>Verified Listing — Premium Audio</span>
          </div>
        </div>
        <div className="gather-products">
          {["Electronics Hub", "Verified Luxury"].map((name, i) => (
            <div key={name}>
              <div className={`gather-product-image product-image-${i}`}>
                <ProductObject kind={i + 1} />
              </div>
              <span>
                {name}
                <small>View ↗</small>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function MonoStudy() {
  return (
    <div className="study-stage study-mono" aria-hidden="true">
      <div className="mono-caption">
        <span className="study-overline">
          DIRECT LUXURY HOSPITALITY.
        </span>
        <h4>
          Zero OTA fees.
          <br />
          <em>Total control.</em>
        </h4>
        <span className="mono-brand">
          cc stays<span>↗</span>
        </span>
      </div>
      <div className="mono-device">
        <div className="device-island" />
        <div className="mono-device-top">
          <span className="study-avatar">CC</span>
          <span>
            Miami Luxury Retreats<small>Direct Booking Engine</small>
          </span>
          <span>◉</span>
        </div>
        <div className="mono-balance">
          <span>Synced with Guesty PMS</span>
          <b>
            Live Rates<span>/night</span>
          </b>
          <small>Dynamic Availability ↗</small>
        </div>
        <div className="mono-actions">
          <span>
            <i>📅</i>Dates
          </span>
          <span>
            <i>👥</i>Guests
          </span>
          <span>
            <i>✓</i>Book
          </span>
        </div>
        <div className="mono-savings">
          <span>◒</span>
          <div>
            Direct Guest Benefits<small>Best rate guarantee. No service markup.</small>
          </div>
          <b>↗</b>
        </div>
        <div className="mono-transactions">
          <b>
            Verified Stays <span>Properties</span>
          </b>
          {[
            ["★", "Biscayne Bay Villa", "Instant Booking", "Active"],
            ["★", "Blue Ridge Chalet", "Dynamic Pricing", "Active"],
            ["★", "South Beach Suite", "Two-Way Sync", "Active"],
          ].map(([symbol, name, date, value]) => (
            <div key={name}>
              <i>{symbol}</i>
              <span>
                {name}
                <small>{date}</small>
              </span>
              <b>{value}</b>
            </div>
          ))}
        </div>
        <div className="mono-tabs">
          <span>
            ◉<small>Villas</small>
          </span>
          <span>
            ⇄<small>Calendar</small>
          </span>
          <span>
            ◒<small>Check-in</small>
          </span>
        </div>
      </div>
    </div>
  );
}
function FieldworkStudy() {
  return (
    <div className="study-stage study-fieldwork" aria-hidden="true">
      <div className="fieldwork-window">
        <WindowBar address="silosuites.com / direct-booking" />
        <div className="fieldwork-nav">
          <b>
            <span>★</span> silosuites
          </b>
          <span>Suites &nbsp; Rates &nbsp; Calendar</span>
          <span className="study-avatar">SS</span>
        </div>
        <div className="fieldwork-main">
          <div className="fieldwork-heading">
            <div>
              <span className="study-overline">AUTOMATED REVENUE &amp; RESERVATION ENGINE</span>
              <h4>Bespoke booking ecosystem.</h4>
            </div>
            <span className="fieldwork-add">Stripe Verified ✓</span>
          </div>
          <div className="fieldwork-board">
            <div className="fieldwork-jobs">
              <b>
                Payment Architecture <span>Flexible Split</span>
              </b>
              {[
                ["Deposit", "60/40 Split Rule", "Configurable"],
                ["Stripe API", "Card & SEPA Direct", "Processed"],
                ["Security", "Pre-Auth Hold", "Zero Premature Capture"],
              ].map(([time, title, status], i) => (
                <div key={title} className={i === 0 ? "active" : ""}>
                  <small>{time}</small>
                  <h5>{title}</h5>
                  <span>{status}</span>
                  <span className="job-team">{["🔒", "⚡", "✓"][i]} ↗</span>
                </div>
              ))}
            </div>
            <div className="fieldwork-map">
              <svg viewBox="0 0 320 280" fill="none">
                <path
                  d="M0 50h320M0 140h320M0 230h320M55 0v280M150 0v280M250 0v280"
                  stroke="#fff"
                  strokeWidth="12"
                />
                <path
                  d="m0 270 320-230M0 0l320 280"
                  stroke="#fff"
                  strokeWidth="8"
                />
                <path
                  d="M80 200V95h140v60"
                  stroke="#2c685b"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                />
                <circle cx="80" cy="200" r="10" fill="#2c685b" />
                <circle cx="220" cy="155" r="10" fill="#2c685b" />
                <circle cx="80" cy="200" r="3" fill="white" />
                <circle cx="220" cy="155" r="3" fill="white" />
              </svg>
              <span className="map-label">
                Two-way iCal Sync <i>Zero Double-Bookings</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function PetalStudy() {
  return (
    <div className="study-stage study-petal" aria-hidden="true">
      <div className="petal-page">
        <div className="petal-nav">
          <b>
            boaj<span>care</span>
          </b>
          <span>Services &nbsp; Care Team &nbsp; Inquiries</span>
          <span style={{ fontSize: 9 }}>USA Verified</span>
        </div>
        <div className="petal-intro">
          <span className="study-overline">EMPATHETIC PATIENT-FIRST DESIGN</span>
          <h4>
            Compassionate care.
            <br />
            <em>Clear pathways.</em>
          </h4>
          <span>Accessible health navigation ↗</span>
        </div>
        <div className="plant-grid">
          {["Skilled Nursing", "Home Health Support", "Family Consultation"].map(
            (name, i) => (
              <div className="plant-card" key={name}>
                <div className={`plant-illustration plant-${i}`}>
                  <span className="plant-stem" />
                  <i />
                  <i />
                  <i />
                  <i />
                  <div className="plant-pot" />
                </div>
                <span>
                  {name}
                  <small>Care details ↗</small>
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
function FormlyStudy() {
  return (
    <div className="study-stage study-formly" aria-hidden="true">
      <div className="formly-window">
        <div className="formly-top">
          <b>
            course<span>masters</span>
          </b>
          <span>
            Curriculum Builder <i>Published</i>
          </span>
          <span className="formly-publish">Preview Course ↗</span>
        </div>
        <div className="formly-layout">
          <aside>
            <span className="study-overline">COURSE ROADMAP</span>
            <span className="selected">01 &nbsp; Foundational Design</span>
            <span>02 &nbsp; Responsive Architecture</span>
            <span>03 &nbsp; Production Deployment</span>
            <span>04 &nbsp; Certification</span>
            <span className="formly-add">+ Add Module</span>
          </aside>
          <div className="formly-canvas">
            <div className="formly-paper">
              <span className="study-overline">DESIGN-TO-CODE ACCELERATION</span>
              <h4>
                From Figma systems.
                <br />
                To live Next.js platforms.
              </h4>
              <p>
                Reusable Tailwind components and
                <br />performant codebases.
              </p>
              <span className="formly-start">Start Learning →</span>
              <small>93%+ Core Web Vitals.</small>
            </div>
          </div>
        </div>
        <div className="formly-bottom">
          <span>Modular Code &nbsp; Responsive UI &nbsp; API Synced</span>
          <span>Fast &amp; Accessible ✓</span>
        </div>
      </div>
    </div>
  );
}
const studies = [
  FormaStudy,
  GatherStudy,
  MonoStudy,
  FieldworkStudy,
  PetalStudy,
  FormlyStudy,
];
export function ProjectArt({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="study-stage study-image-stage" aria-hidden="true">
        <img
          src="/assets/images/horace-showcase.png"
          alt="Horace Learning Management System"
          className="study-showcase-img"
        />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="study-stage study-image-stage" aria-hidden="true">
        <img
          src="/assets/images/chrisema-showcase.jpg"
          alt="Chrisema E-Commerce Platform"
          className="study-showcase-img"
        />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="study-stage study-image-stage" aria-hidden="true">
        <img
          src="/assets/images/ccstays-showcase.jpg"
          alt="CC Stays Luxury Direct Booking Portal"
          className="study-showcase-img"
        />
      </div>
    );
  }
  if (index === 3) {
    return (
      <div className="study-stage study-image-stage" aria-hidden="true">
        <img
          src="/assets/images/silosuites-showcase.jpg"
          alt="Silo Suites Direct Booking Architecture"
          className="study-showcase-img"
        />
      </div>
    );
  }
  if (index === 4) {
    return (
      <div className="study-stage study-image-stage" aria-hidden="true">
        <img
          src="/assets/images/boajcare-showcase.jpg"
          alt="BOAJ Healthcare Patient Platform"
          className="study-showcase-img"
        />
      </div>
    );
  }
  if (index === 5) {
    return (
      <div className="study-stage study-image-stage" aria-hidden="true">
        <img
          src="/assets/images/the-course-masters-showcase.jpg"
          alt="The Course Masters E-Learning Platform"
          className="study-showcase-img"
        />
      </div>
    );
  }
  const Study = studies[index];
  return Study ? <Study /> : null;
}
