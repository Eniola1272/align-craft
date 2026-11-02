import type { Metadata } from "next";
import AboutContent from "@/content/about";
export const metadata: Metadata = {
  title: "About",
  description:
    "An independent digital studio connecting product thinking, design and engineering with clear ownership.",
};
export default function AboutPage() {
  return <AboutContent />;
}
