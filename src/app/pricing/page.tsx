import type { Metadata } from "next";
import PricingContent from "@/content/pricing";
export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Defined delivery phases, clear scope and a quote after discovery. Explore how Align Craft prices product design and engineering.",
};
export default function PricingPage() {
  return <PricingContent />;
}
