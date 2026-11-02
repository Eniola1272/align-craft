import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiteDialogs } from "@/components/site-dialogs";
import "./globals.css";
import "./editorial.css";
export const metadata: Metadata = {
  title: {
    default: "Align Craft — Beautifully built websites & software",
    template: "%s — Align Craft",
  },
  description:
    "Websites and digital products, designed and built by one team. Work with Align Craft on a clear scope, considered interfaces and a practical plan for launch.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <SiteDialogs />
      </body>
    </html>
  );
}
