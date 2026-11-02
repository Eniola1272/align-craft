"use client";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { usePathname } from "next/navigation";
import { contactEmail, services, projects } from "@/content/site";
import { ProjectArt } from "@/content/project-art";
import { notes } from "@/content/journal";
type Detail = { kind: "project" | "article"; index: number } | null;
export function SiteDialogs() {
  const contact = useRef<HTMLDialogElement>(null);
  const detail = useRef<HTMLDialogElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const summaryField = useRef<HTMLTextAreaElement>(null);
  const [copyError, setCopyError] = useState(false);
  const [selection, setSelection] = useState<Detail>(null);
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (summary) resultHeading.current?.focus();
  }, [summary]);
  useEffect(() => {
    if (selection) detail.current?.showModal();
  }, [selection]);
  useEffect(() => {
    contact.current?.close();
    detail.current?.close();
  }, [pathname]);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const trigger = event.target.closest<HTMLElement>(
        "[data-contact], [data-project], [data-article]",
      );
      if (!trigger) return;
      event.preventDefault();
      if (trigger.hasAttribute("data-contact")) {
        const select = contact.current?.querySelector<HTMLSelectElement>(
          'select[name="service"]',
        );
        if (
          select &&
          trigger.dataset.service &&
          services.includes(trigger.dataset.service)
        ) {
          select.value = trigger.dataset.service;
          setSummary("");
        }
        contact.current?.showModal();
      } else {
        const kind = trigger.hasAttribute("data-project")
          ? "project"
          : "article";
        const index = Number(trigger.dataset[kind]);
        if (
          !Number.isInteger(index) ||
          index < 0 ||
          index >= (kind === "project" ? projects.length : notes.length)
        )
          return;
        setSelection({ kind, index });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSummary(
      `Project enquiry — Align Craft\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\n${data.get("project")}`,
    );
    setCopied(false);
    setCopyError(false);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopied(false);
      setCopyError(true);
      summaryField.current?.focus();
      summaryField.current?.select();
    }
  }
  function closeOnBackdrop(event: ReactMouseEvent<HTMLDialogElement>) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      event.currentTarget.close();
  }
  const project =
    selection?.kind === "project" ? projects[selection.index] : null;
  const article = selection?.kind === "article" ? notes[selection.index] : null;
  return (
    <>
      <dialog
        className="modal"
        ref={contact}
        aria-labelledby="enquiry-title"
        onClick={closeOnBackdrop}
      >
        <button
          className="close"
          aria-label="Close enquiry"
          onClick={() => contact.current?.close()}
        >
          ×
        </button>
        <span className="eyebrow">Let’s find the right next step</span>
        <h2 id="enquiry-title">
          Big idea?
          <br />
          <strong>Let’s align.</strong>
        </h2>
        <p>
          Tell us a little about your project. We’ll prepare an email to{" "}
          {contactEmail} for you to review and send.
        </p>
        <form
          onSubmit={prepare}
          onChange={() => {
            setSummary("");
            setCopied(false);
            setCopyError(false);
          }}
        >
          <label>
            Your name
            <input
              name="name"
              required
              placeholder="Your name"
              autoComplete="name"
            />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>
          <label>
            What are you building?
            <textarea
              name="project"
              required
              placeholder="The idea, the problem, and where you are today…"
            />
          </label>
          <label>
            What kind of help do you need?
            <select name="service">
              {services.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <button className="btn primary" type="submit">
            Prepare project enquiry ↗
          </button>
          <p className="contact-note">
            Next, review your enquiry and open it in your email app. Nothing is
            sent from this form.
          </p>
        </form>
        {summary && (
          <div className="enquiry-result" aria-live="polite">
            <h3 ref={resultHeading} tabIndex={-1}>
              Your enquiry is ready.
            </h3>
            <p>
              Review and send this enquiry to {contactEmail}, or copy the
              summary below.
            </p>
            <textarea
              readOnly
              ref={summaryField}
              value={summary}
              aria-label="Your enquiry summary"
              onFocus={(event) => event.target.select()}
            />
            {copyError && (
              <p role="status">
                The summary is selected. Use your device’s copy command to copy
                it.
              </p>
            )}
            <div className="buttons">
              <a
                className="btn primary"
                href={`mailto:${contactEmail}?subject=${encodeURIComponent("Project enquiry — Align Craft")}&body=${encodeURIComponent(summary)}`}
              >
                Open email app ↗
              </a>
              <button className="btn" onClick={copy}>
                {copied ? "Copied ✓" : "Copy enquiry ↗"}
              </button>
            </div>
          </div>
        )}
      </dialog>
      <dialog
        className="modal project-detail-modal"
        ref={detail}
        onClose={() => setSelection(null)}
        aria-labelledby="detail-title"
        onClick={closeOnBackdrop}
      >
        <button
          className="close"
          aria-label="Close detail"
          onClick={() => detail.current?.close()}
        >
          ×
        </button>
        {project && (
          <>
            <span className="eyebrow">
              Illustrative concept · {project.category}
            </span>
            <h2 id="detail-title">
              {project.name}
              <strong className="accent">.</strong>
            </h2>
            <ProjectArt index={selection!.index} />
            <p style={{ marginTop: 25 }}>
              {project.description} This original concept demonstrates a
              possible product direction rather than a commissioned client
              project.
            </p>
            <ul className="project-disciplines" aria-label="Concept scope">
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>The design challenge</h3>
            <p>{project.challenge}</p>
            <h3>The design approach</h3>
            <p>{project.approach}</p>
            <h3>Intended outcome</h3>
            <p>{project.outcome}</p>
            <a className="btn primary" href="/pricing">
              Explore a similar phase ↗
            </a>
          </>
        )}
        {article && (
          <>
            <span className="eyebrow">
              The studio notebook · {article.category}
            </span>
            <h2 id="detail-title">{article.title}</h2>
            <div className="article-body">
              {article.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
