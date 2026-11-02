"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/content/site";
import { Brand } from "./brand";
type NavItem = { label: string; href: string };
const groups: Record<string, NavItem[]> = {
  Services: [
    { label: "Website design & development", href: "/#service-1" },
    { label: "Digital product design", href: "/#service-2" },
    { label: "Software development", href: "/#service-3" },
    { label: "Connected systems & automation", href: "/#service-4" },
  ],
  Work: [
    { label: "All explorations", href: "/#work" },
    ...projects.slice(0, 4).map((p) => ({
      label: p.name,
      href: `/#project-${p.name.toLowerCase()}`,
    })),
    { label: "Our approach", href: "/#process" },
  ],
  About: [
    { label: "Our studio", href: "/about" },
    { label: "How we work", href: "/about#standards" },
    { label: "Delivery team", href: "/about#team" },
  ],
  Resources: [
    { label: "Insights", href: "/#insights" },
    { label: "FAQs", href: "/#faq" },
    { label: "Start a project", href: "/#contact" },
  ],
};
export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  function close() {
    setOpen(null);
    setMobile(false);
  }
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) close();
    };
    const escape = (event: KeyboardEvent) => {
      if (document.querySelector("dialog[open]")) return;
      if (event.key === "Escape" && (mobile || open)) {
        const trigger = open
          ? header.current?.querySelector<HTMLButtonElement>(
              `[aria-controls="nav-${open}"]`,
            )
          : menuButton.current;
        close();
        trigger?.focus();
      }
      if (event.key === "Tab" && mobile) {
        const items = Array.from(
          header.current?.querySelectorAll<HTMLElement>("a[href], button") ??
            [],
        ).filter((item) => item.getClientRects().length > 0);
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [mobile, open]);
  useEffect(() => {
    if (!mobile) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobile]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const resize = () => {
      if (desktop.matches) close();
    };
    desktop.addEventListener("change", resize);
    return () => desktop.removeEventListener("change", resize);
  }, []);
  function group(name: string) {
    return (
      <div className="navgroup" key={name}>
        <button
          aria-expanded={open === name}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(name);
              requestAnimationFrame(() =>
                header.current
                  ?.querySelector<HTMLAnchorElement>(`#nav-${name} a`)
                  ?.focus(),
              );
            }
          }}
          aria-controls={`nav-${name}`}
          onClick={() => setOpen(open === name ? null : name)}
        >
          {name}
        </button>
        <div
          className={`dropdown ${open === name ? "open" : ""}`}
          id={`nav-${name}`}
        >
          {groups[name].map((item, index) => (
            <Link key={item.label} href={item.href} onClick={close}>
              {name === "Services" && (
                <span className="dropdown-service-index" aria-hidden="true">
                  0{index + 1}
                </span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return (
    <header
      className="header"
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          close();
      }}
    >
      <div className="wrap header-inner">
        <Brand />
        <button
          className="menu-toggle"
          ref={menuButton}
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="main-navigation"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? "×" : "☰"}
        </button>
        <nav
          className={`nav ${mobile ? "mobile-open" : ""}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {group("Services")}
          {group("Work")}
          <Link
            href="/pricing"
            className={pathname === "/pricing" ? "active" : ""}
            aria-current={pathname === "/pricing" ? "page" : undefined}
            onClick={close}
          >
            Pricing
          </Link>
          {group("About")}
          {group("Resources")}
          <button
            className="btn primary header-cta"
            data-contact
            onClick={close}
          >
            Start a project <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
