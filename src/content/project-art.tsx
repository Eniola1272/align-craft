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
        <WindowBar address="forma / workspace" />
        <div className="forma-layout">
          <aside className="forma-sidebar">
            <span className="forma-logo">
              f<span>forma</span>
            </span>
            <span className="study-workspace">
              Studio workspace <span>⌄</span>
            </span>
            <div className="study-nav-item selected">▦ &nbsp; Overview</div>
            <div className="study-nav-item">
              □ &nbsp; Projects <small>06</small>
            </div>
            <div className="study-nav-item">◷ &nbsp; My tasks</div>
            <div className="study-nav-item">↗ &nbsp; Shared files</div>
            <div className="study-sidebar-bottom">
              <span className="study-avatar">AC</span>
              <span>
                Alex Carter<small>Personal workspace</small>
              </span>
            </div>
          </aside>
          <div className="forma-main">
            <div className="study-topline">
              <span>
                Workspace <span>/ Overview</span>
              </span>
              <span>⌕ &nbsp; ◉</span>
            </div>
            <div className="forma-greeting">
              <div>
                <span className="study-overline">MONDAY, OCTOBER 12</span>
                <h4>
                  A little focus.
                  <br />A lot of possibility.
                </h4>
              </div>
              <span className="study-add">+ New project</span>
            </div>
            <div className="forma-stats">
              <div>
                <span>In progress</span>
                <b>
                  06<small>projects</small>
                </b>
                <i className="stat-rule" />
              </div>
              <div>
                <span>Ready for review</span>
                <b>
                  03<small>deliverables</small>
                </b>
                <i className="stat-rule green" />
              </div>
              <div>
                <span>This week</span>
                <b>
                  12<small>tasks completed</small>
                </b>
                <i className="stat-rule orange" />
              </div>
            </div>
            <div className="forma-projects">
              <div className="study-panel-heading">
                <b>Your projects</b>
                <span>View all ↗</span>
              </div>
              {[
                ["Brand foundations", "Design", "68%"],
                ["Website refresh", "Development", "42%"],
                ["Product discovery", "Strategy", "85%"],
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
                    {["JL", "AC", "MT"][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="forma-bottom">
              <span>
                <i /> Everything in its right place.
              </span>
              <span>Built for the way you work.</span>
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
          Thoughtful objects. Everyday rituals.
        </div>
        <div className="gather-nav">
          <b>
            gather<span>®</span>
          </b>
          <span>Shop &nbsp; Our story</span>
          <span>Bag (0)</span>
        </div>
        <div className="gather-feature">
          <div>
            <span className="study-overline">THE EVERYDAY COLLECTION</span>
            <h4>
              Make room
              <br />
              for the
              <br />
              <em>ordinary.</em>
            </h4>
            <span className="gather-shop">Discover the collection ↗</span>
          </div>
          <div className="gather-feature-object">
            <ProductObject />
            <span>No. 01 — The everyday vase</span>
          </div>
        </div>
        <div className="gather-products">
          {["The low bowl", "The quiet candle"].map((name, i) => (
            <div key={name}>
              <div className={`gather-product-image product-image-${i}`}>
                <ProductObject kind={i + 1} />
              </div>
              <span>
                {name}
                <small>Explore ↗</small>
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
          MONEY, WITH A LITTLE MORE CLARITY.
        </span>
        <h4>
          Less friction.
          <br />
          <em>More living.</em>
        </h4>
        <span className="mono-brand">
          mono<span>↗</span>
        </span>
      </div>
      <div className="mono-device">
        <div className="device-island" />
        <div className="mono-device-top">
          <span className="study-avatar">A</span>
          <span>
            Good morning, Alex<small>Your day. Your way.</small>
          </span>
          <span>◉</span>
        </div>
        <div className="mono-balance">
          <span>Available balance</span>
          <b>
            ₦240,000<span>.00</span>
          </b>
          <small>Account details ↗</small>
        </div>
        <div className="mono-actions">
          <span>
            <i>↗</i>Send
          </span>
          <span>
            <i>+</i>Add money
          </span>
          <span>
            <i>▦</i>More
          </span>
        </div>
        <div className="mono-savings">
          <span>◒</span>
          <div>
            A little for later.<small>Your next adventure starts here.</small>
          </div>
          <b>↗</b>
        </div>
        <div className="mono-transactions">
          <b>
            Recent activity <span>See all</span>
          </b>
          {[
            ["↗", "Coffee & co.", "Today, 09:41", "−₦4,500"],
            ["↓", "Money received", "Yesterday", "+₦50,000"],
            ["↗", "Internet plan", "Yesterday", "−₦12,000"],
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
            ◉<small>Home</small>
          </span>
          <span>
            ⇄<small>Payments</small>
          </span>
          <span>
            ◒<small>Savings</small>
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
        <WindowBar address="fieldwork / operations" />
        <div className="fieldwork-nav">
          <b>
            <span>↗</span> fieldwork
          </b>
          <span>Overview &nbsp; Jobs &nbsp; Team</span>
          <span className="study-avatar">KM</span>
        </div>
        <div className="fieldwork-main">
          <div className="fieldwork-heading">
            <div>
              <span className="study-overline">YOUR OPERATION, CONNECTED.</span>
              <h4>A clear view of the day.</h4>
            </div>
            <span className="fieldwork-add">+ Schedule job</span>
          </div>
          <div className="fieldwork-board">
            <div className="fieldwork-jobs">
              <b>
                Today’s schedule <span>3 jobs</span>
              </b>
              {[
                ["09:00", "Site assessment", "In progress"],
                ["11:30", "Installation review", "Scheduled"],
                ["14:00", "Customer handover", "Scheduled"],
              ].map(([time, title, status], i) => (
                <div key={title} className={i === 0 ? "active" : ""}>
                  <small>{time}</small>
                  <h5>{title}</h5>
                  <span>{status}</span>
                  <span className="job-team">{["AO", "KM", "JL"][i]} ↗</span>
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
                Team locations <i>Live view</i>
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
            petal<span>✳</span>
          </b>
          <span>Plants &nbsp; Plant care &nbsp; Our story</span>
          <span>Bag (0)</span>
        </div>
        <div className="petal-intro">
          <span className="study-overline">A LITTLE ROOM TO GROW.</span>
          <h4>
            Bring the
            <br />
            <em>outside in.</em>
          </h4>
          <span>Good plants. Happier spaces. ↗</span>
        </div>
        <div className="plant-grid">
          {["The easygoing one", "The sun seeker", "The statement piece"].map(
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
                  <small>Meet your plant ↗</small>
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
            formly<span>✳</span>
          </b>
          <span>
            Customer feedback <i>Draft</i>
          </span>
          <span className="formly-publish">Publish ↗</span>
        </div>
        <div className="formly-layout">
          <aside>
            <span className="study-overline">YOUR QUESTIONS</span>
            <span className="selected">01 &nbsp; Welcome screen</span>
            <span>02 &nbsp; Overall experience</span>
            <span>03 &nbsp; A little more detail</span>
            <span>04 &nbsp; Thank you</span>
            <span className="formly-add">+ Add a question</span>
          </aside>
          <div className="formly-canvas">
            <div className="formly-paper">
              <span className="study-overline">LET’S MAKE THINGS BETTER.</span>
              <h4>
                Your experience.
                <br />
                In your words.
              </h4>
              <p>
                A few good questions can make
                <br />a world of difference.
              </p>
              <span className="formly-start">Let’s begin →</span>
              <small>Takes about 2 minutes.</small>
            </div>
          </div>
        </div>
        <div className="formly-bottom">
          <span>Design &nbsp; Logic &nbsp; Settings</span>
          <span>All changes saved ✓</span>
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
  const Study = studies[index];
  return Study ? <Study /> : null;
}
