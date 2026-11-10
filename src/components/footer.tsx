import Link from "next/link";
import { Brand } from "./brand";
import { contactEmail } from "@/content/site";
const groups = [
  {
    title: "Expertise",
    links: [
      { label: "Website design & development", href: "/#service-1" },
      { label: "Digital product design", href: "/#service-2" },
      { label: "Software development", href: "/#service-3" },
      { label: "Systems & automation", href: "/#service-4" },
      { label: "Marketing & growth", href: "/marketing" },
    ],
  },
  {
    title: "The studio",
    links: [
      { label: "About Align Craft", href: "/about" },
      { label: "Selected client work", href: "/#work" },
      { label: "How we work", href: "/#process" },
      { label: "Start a project", href: "/#contact" },
    ],
  },
  {
    title: "Good to know",
    links: [
      { label: "Scope & pricing", href: "/pricing" },
      { label: "Studio notes", href: "/#insights" },
      { label: "Questions & answers", href: "/#faq" },
    ],
  },
];
export function Footer() {
  return (
    <>
      <section
        className="studio-closing"
        id="contact"
        aria-labelledby="closing-heading"
      >
        <div className="wrap">
          <span className="studio-overline">Your next product decision</span>
          <div className="studio-closing-grid">
            <h2 id="closing-heading">
              Let’s build
              <br />
              <em>it properly.</em>
            </h2>
            <div>
              <p>
                Tell us what the product needs to do and who’s going to use it.
                We’ll help define the first phase, the decisions to make and the
                work involved.
              </p>
              <button className="btn primary" data-contact>
                Start a project <span aria-hidden="true">↗</span>
              </button>
              <a
                className="studio-closing-email"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="dark footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <Brand />
              <p>
                Website and software design, with the engineering to make it
                work for your business.
              </p>
              <div className="footer-endnote">
                Independent minds. Aligned craft.
              </div>
            </div>
            {groups.map((group) => (
              <div className="footer-links" key={group.title}>
                <div className="footer-title">{group.title}</div>
                {group.links.map((link) => (
                  <Link key={link.label} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Align Craft</span>
            <span>Design with intent. Build with care.</span>
            <a href="#main-content">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
