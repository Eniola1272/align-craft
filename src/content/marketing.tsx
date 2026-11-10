import Link from "next/link";
import {
  marketingCaseStudies,
  marketingCapabilities,
} from "@/content/marketing-data";

function MarketingHero() {
  return (
    <section className="marketing-hero" aria-labelledby="marketing-heading">
      <div className="marketing-hero-bg" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/ui-ux-design-monitor.jpg"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
      <div className="marketing-hero-overlay" aria-hidden="true" />
      <div className="wrap marketing-hero-content">
        <div className="studio-hero-top-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          <span>Growth Strategy · Social Media · Content Direction</span>
        </div>

        <div className="marketing-hero-grid">
          <div>
            <h1 id="marketing-heading">
              Stories that reach.
              <br />
              <strong>Campaigns that convert.</strong>
            </h1>
          </div>

          <div className="marketing-hero-aside">
            <p>
              We combine viral storytelling, multi-channel social media management,
              and performance-driven Meta paid ads to build engaged audiences and
              measurable customer acquisition for your business.
            </p>
            <div className="buttons">
              <button
                className="btn primary hero-btn-solid"
                data-contact
                data-service="Digital Marketing &amp; Growth"
              >
                Plan your campaign <span aria-hidden="true">↗</span>
              </button>
              <a className="btn hero-btn-outline" href="#cases">
                View show cases <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="marketing-stats-strip">
          <div className="m-stat">
            <b>371K+</b>
            <span>Paid Campaign Views</span>
          </div>
          <div className="m-stat">
            <b>261K</b>
            <span>Unique Audience Reach</span>
          </div>
          <div className="m-stat">
            <b>76%</b>
            <span>Non-Follower Discovery</span>
          </div>
          <div className="m-stat">
            <b>+35%</b>
            <span>Engagement Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="studio-section" id="capabilities">
      <div className="wrap">
        <div className="studio-section-label">Our growth capabilities</div>
        <div className="studio-section-heading">
          <h2>
            How we grow
            <br />
            <em>your brand online.</em>
          </h2>
          <p>
            From creative scriptwriting and short-form video hooks to full-funnel
            Meta ad campaigns and SEO content strategy.
          </p>
        </div>

        <div className="marketing-capabilities-grid">
          {marketingCapabilities.map((cap, i) => (
            <div className="marketing-cap-card" key={cap.title}>
              <span className="cap-number">0{i + 1}</span>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
              <div className="cap-deliverables">{cap.deliverables}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section className="studio-section marketing-cases-section" id="cases">
      <div className="wrap">
        <div className="studio-section-label">Proven results &amp; campaign show cases</div>
        <div className="studio-section-heading">
          <h2>
            Campaigns built on data.
            <br />
            <em>Validated by reach.</em>
          </h2>
          <p>
            Real outcomes delivered across fintech, agencies, and high-growth
            brands. Every metric backed by transparent reporting.
          </p>
        </div>

        <div className="marketing-cases-list">
          {marketingCaseStudies.map((study) => (
            <article className="marketing-case-card" key={study.id} id={study.id}>
              <div className="case-header">
                <div>
                  <span className="case-industry">{study.industry}</span>
                  <h3 className="case-client">{study.client}</h3>
                </div>
                <span className="case-badge">{study.badge}</span>
              </div>

              <h4 className="case-headline">“{study.headline}”</h4>
              <p className="case-summary">{study.summary}</p>

              <div className="case-metrics-grid">
                {study.metrics.map((m) => (
                  <div className="metric-box" key={m.label}>
                    <b>{m.value}</b>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="case-details-split">
                <div>
                  <h5>The Challenge</h5>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <h5>Strategic Execution</h5>
                  <ul>
                    {study.execution.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="case-footer">
                <div className="case-deliverables-tags">
                  {study.deliverables.map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
                <button
                  className="btn primary"
                  data-contact
                  data-service="Digital Marketing &amp; Growth"
                >
                  Discuss this approach <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketingProcess() {
  return (
    <section className="studio-section marketing-process-section">
      <div className="wrap">
        <div className="studio-section-label">Our campaign cadence</div>
        <div className="studio-section-heading">
          <h2>
            From audience insight
            <br />
            <em>to scalable growth.</em>
          </h2>
          <p>
            We eliminate guesswork. Every campaign runs on a continuous loop of
            research, creative scripting, targeted deployment, and data optimization.
          </p>
        </div>

        <ol className="marketing-steps-grid">
          <li>
            <span>01</span>
            <h4>Research &amp; Narrative Architecture</h4>
            <p>
              We analyze your audience, study competitor gaps, and define the core
              story hooks that make your value proposition immediately understandable.
            </p>
          </li>
          <li>
            <span>02</span>
            <h4>Content Production &amp; Calendar</h4>
            <p>
              We draft monthly briefs, script short-form videos with viral hooks,
              and design carousels optimized for saves and shares.
            </p>
          </li>
          <li>
            <span>03</span>
            <h4>Targeted Paid Media (Meta Ads)</h4>
            <p>
              We configure lookalike audiences, manage ad spend, and run A/B
              creative tests to lower your customer acquisition cost (CAC).
            </p>
          </li>
          <li>
            <span>04</span>
            <h4>Analytics &amp; Iteration</h4>
            <p>
              We monitor click-through rates, video retention, and lead conversions,
              delivering clear monthly reports that direct the next sprint.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function MarketingClosing() {
  return (
    <section className="marketing-closing">
      <div className="wrap">
        <div className="marketing-closing-card">
          <span className="studio-overline">Ready to scale your reach?</span>
          <h2>
            Let’s build an audience
            <br />
            <em>that fuels your business.</em>
          </h2>
          <p>
            Whether you need a full social media management retainer, a high-impact
            Meta ad campaign, or a complete brand content strategy.
          </p>
          <div className="buttons">
            <button
              className="btn primary"
              data-contact
              data-service="Digital Marketing &amp; Growth"
            >
              Start a growth sprint ↗
            </button>
            <Link className="btn hero-btn-outline" href="/pricing">
              Review phase pricing ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MarketingContent() {
  return (
    <div className="marketing-page">
      <MarketingHero />
      <CapabilitiesSection />
      <CaseStudiesSection />
      <MarketingProcess />
      <MarketingClosing />
    </div>
  );
}
