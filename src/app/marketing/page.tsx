import type { Metadata } from "next";
import MarketingContent from "@/content/marketing";

export const metadata: Metadata = {
  title: "Digital Marketing & Content Strategy",
  description:
    "Data-driven social media management, viral short-form video scripting, and Meta paid advertising campaigns that turn attention into customers.",
};

export default function MarketingPage() {
  return <MarketingContent />;
}

