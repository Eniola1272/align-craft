export type MarketingCaseStudy = {
  id: string;
  client: string;
  industry: string;
  role: string;
  headline: string;
  summary: string;
  badge: string;
  metrics: { value: string; label: string }[];
  deliverables: string[];
  challenge: string;
  execution: string[];
  results: string;
};

export const marketingCaseStudies: MarketingCaseStudy[] = [
  {
    id: "payrep",
    client: "PayRep",
    industry: "Fintech & Digital Payments",
    role: "Content Strategy, Short-Form Video & Meta Paid Ads",
    headline: "Translating complex fintech features into viral, relatable financial stories.",
    summary:
      "Engineered monthly social calendars across Instagram, TikTok, and Facebook. Scripted hooks and produced relatable money narratives turning features like Panic Balance, Scan & Pay, and Smart Narration into high-reach viral moments.",
    badge: "371K+ Views · 261K Reach",
    metrics: [
      { value: "371,000+", label: "Ad Video Views (28 Days)" },
      { value: "261,000", label: "Unique Meta Audience Reach" },
      { value: "35,500+", label: "Organic IG Video Views" },
      { value: "76%", label: "Views from Non-Followers" },
    ],
    deliverables: [
      "Short-form video scripts & hooks",
      "Meta Ads campaign architecture (FB/IG)",
      "Storytelling content calendars",
      "Audience targeting & placement optimization",
    ],
    challenge:
      "Fintech apps often struggle to communicate security and payment features without sounding overly technical or mundane, leading to low social engagement and high customer acquisition costs.",
    execution: [
      "Scripted culture-first, money-focused short-form video concepts built around trending sounds and common financial anxieties.",
      "Framed features like Panic Balance and Smart Narration as intuitive life-hacks rather than technical tools.",
      "Configured high-converting Meta paid ad objectives, testing ad creatives, targeted demographics, and placement schedules.",
      "Iterated rapidly against analytics, doubling down on top-performing creative formats that reached 76% net-new non-followers.",
    ],
    results:
      "Generated 371K+ paid views within 28 days with a 261K unique Facebook reach, alongside 35.5K organic Instagram views with 76% discovery from prospective new users.",
  },
  {
    id: "business-catalyst",
    client: "The Business Catalyst Agency",
    industry: "B2B Marketing & Brand Consulting",
    role: "Integrated Campaigns, Lead Gen & Social Strategy",
    headline: "Scaling brand positioning and qualified lead acquisition across digital channels.",
    summary:
      "Led end-to-end multi-channel marketing campaigns, structured content planning, and promotional initiatives that elevated brand trust and drove bottom-line client conversions.",
    badge: "+35% Client Engagement · +20% Leads",
    metrics: [
      { value: "+35%", label: "Client Engagement Increase" },
      { value: "+20%", label: "Qualified Inbound Leads" },
      { value: "100%", label: "Cross-Channel Consistency" },
      { value: "5/5", label: "Client Satisfaction Rating" },
    ],
    deliverables: [
      "Integrated marketing campaign strategy",
      "Lead generation funnels",
      "Social media content calendar",
      "Performance analytics & reporting",
    ],
    challenge:
      "The agency needed to clearly articulate its high-ticket consulting capabilities to corporate decision-makers while maintaining a consistent multi-channel posting cadence that drove actual qualified business inquiries.",
    execution: [
      "Developed an integrated marketing framework harmonizing thought leadership, case study breakdowns, and promotional incentives.",
      "Standardized corporate messaging across LinkedIn, Meta, and email marketing channels.",
      "Established systematic audience engagement workflows to nurture inquiries into qualified sales meetings.",
      "Delivered monthly stakeholder analytics reports with data-driven creative adjustments.",
    ],
    results:
      "Boosted overall client engagement by 35% and produced a 20% net increase in verified business inquiries within the agency's primary target markets.",
  },
  {
    id: "align-growth",
    client: "Align Digital Ecosystem",
    industry: "Agency Brand & Community",
    role: "Social Media Management & SEO Content Strategy",
    headline: "Systematic community growth, organic visibility, and consistent brand presence.",
    summary:
      "Orchestrated cohesive content schedules, audience acquisition strategies, and SEO content updates that improved search positioning and built an engaged community of founders.",
    badge: "+25% Audience Growth · Organic SEO",
    metrics: [
      { value: "+25%", label: "Social Following Expansion" },
      { value: "93%+", label: "Content Schedule Consistency" },
      { value: "Top Tier", label: "Brand Tone Alignment" },
      { value: "Organic", label: "Search Visibility Uplift" },
    ],
    deliverables: [
      "Social media brand management",
      "Editorial content calendar",
      "Website SEO content optimization",
      "Community engagement & moderation",
    ],
    challenge:
      "Maintaining brand prestige, consistent digital storytelling, and audience retention while ensuring the website and social channels reinforced each other in search rankings.",
    execution: [
      "Implemented a structured monthly content calendar with clear theme pillars: technical craftsmanship, product design insights, and client results.",
      "Optimized on-page website copy and blog materials to support search discoverability (SEO).",
      "Maintained active, high-touch community engagement and stakeholder alignment.",
    ],
    results:
      "Grew social media audience size by 25% organically while securing high engagement consistency and reinforcing agency positioning.",
  },
];

export const marketingCapabilities = [
  {
    title: "Content Strategy & Planning",
    deliverables: "Audience research · Editorial calendar · Scriptwriting & hooks · Narrative architecture",
    description:
      "We design message hierarchies that cut through digital noise. Every post, video, and carousel is planned with intent—targeting customer problems and establishing brand authority.",
  },
  {
    title: "Short-Form Video & Creative Direction",
    deliverables: "TikTok, Reels & Shorts scripts · Trend adaptation · Visual storytelling · Creative hooks",
    description:
      "Short-form video is the engine of modern discovery. We write compelling scripts, structure dynamic hooks, and direct video formats that consistently capture views from non-followers.",
  },
  {
    title: "Paid Media & Meta Ad Campaigns",
    deliverables: "Meta Ads Manager · Audience segmentation · Retargeting funnels · Creative performance testing",
    description:
      "Targeted paid advertising engineered for positive ROI. We manage ad objectives, test creatives against lookalike audiences, and monitor cost-per-result to scale your customer base.",
  },
  {
    title: "Social Media Management & Community",
    deliverables: "Channel management · Daily engagement · Reputation monitoring · Growth analytics",
    description:
      "Active management across LinkedIn, Instagram, TikTok, and X. We handle community responses, ensure daily brand consistency, and build long-term follower loyalty.",
  },
  {
    title: "SEO & Content Optimization",
    deliverables: "Technical SEO · Keyword research · Editorial blog posts · Website conversion copy",
    description:
      "Search visibility that drives organic inbound traffic. We pair high-intent keyword strategies with human-centered writing that ranks on Google and convinces readers to take action.",
  },
  {
    title: "Marketing Analytics & Reporting",
    deliverables: "Google Analytics (GA4) · Meta Insights · Funnel conversion audit · Executive reports",
    description:
      "Transparent, data-driven decisions. We track impressions, engagement velocity, and customer conversion paths, providing clear monthly reports that direct the next growth phase.",
  },
];
