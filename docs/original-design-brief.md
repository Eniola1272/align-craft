# Role & Objective

You are an elite Senior Frontend Architect and UI/UX Product Designer. Your task is to build a multi-page, high-conversion software & product engineering agency website inspired directly by the attached reference screenshots.

You must strictly adhere to the structural layout, editorial pacing, typographic hierarchy, and component patterns shown in the screenshots, while adapting the brand color system from vibrant orange/warm cream to a bespoke **Lavender & Obsidian** palette.

---

# 1. Visual Identity & Design System

## Color Palette (Lavender Editorial Replacement)

Replace the reference site's orange (`#F25C05`) and warm cream (`#FDF6E9`) with a sophisticated, high-contrast Lavender system:

- **Background Primary (Light):** `#FFFFFF` (Pure white for hero sections and primary cards, layered with a subtle 1px structural square grid `#F4F3F8`).
- **Background Secondary (Soft Lavender Tint):** `#F6F4FF` (Replaces the warm cream sections in the screenshots; used for alternating full-width sections like Case Studies, Testimonials, and FAQs).
- **Background Dark (Obsidian):** `#0A090F` (Replaces the pitch-black sections used for metrics strips, dark callout banners, and the footer).
- **Primary Brand Accent (Electric Lavender):** `#8B5CF6` (Used for primary pill buttons, active nav states, highlighted headline phrases, and step numbers).
- **Secondary Accent (Soft Lilac):** `#C4B5FD` (Used for subtle badges, dark-mode text highlights, and borders).
- **Text Primary:** `#111015` (Deep charcoal/black for maximum legibility).
- **Text Muted:** `#5E5C6C` (Slate grey for body copy, subtitles, and metadata).
- **Borders & Hairlines:** `#E6E4F0` (1px solid structural dividers, table borders, and card outlines).

## Typography & Scannable Hierarchy

- **Font Stack:** Use `Plus Jakarta Sans` or `Inter` for clean, geometric Neo-Grotesque precision.
- **Dual-Weight Headline Pattern (Crucial):** Replicate the exact typographic motif from the screenshots where section headers start in a **Regular (400)** weight and finish the key phrase in **ExtraBold (800)**—either in solid black or Primary Lavender (`#8B5CF6`).
  - _Examples:_ "A design & development team for **ambitious founders**" | "Core delivery **phases.**" | "Somebody has to **own the outcome.**"
- **Sizing & Tracking:**
  - Hero Display: `clamp(2.75rem, 5vw, 4.5rem)`, line-height `1.08`, letter-spacing `-0.03em`.
  - Section Headers (H2): `clamp(2rem, 3.5vw, 3rem)`, line-height `1.15`, letter-spacing `-0.02em`.
  - Eyebrow Labels: `0.75rem` (12px), uppercase or sentence-case pill/text above H2s, `font-weight: 600`, muted or lavender accent.

## Layout, Grids & Aesthetic Motifs

1. **Exposed Background Grid:** Hero sections feature a subtle, large-cell background square grid (`80px x 80px`, `1px solid rgba(139, 92, 246, 0.08)`).
2. **Rhythmic Section Alternation:** Alternate strictly between White (`#FFFFFF` with grid), Soft Lavender Tint (`#F6F4FF`), and Obsidian Dark (`#0A090F`) to pace the user's scroll without visual fatigue.
3. **Neo-Classical / Surrealist Editorial Imagery:** Where the reference uses high-contrast surreal/classical imagery (like the Creation of Adam hands in the hero, the brass scales on Pricing, the flaming torch on About, and the classical stone arch in the footer), use clean image containers with subtle purple/lavender ambient lighting glow effects or high-contrast monochrome-plus-lavender duotone styling.
4. **Buttons (Pill Architecture):**
   - **Primary CTA:** Solid `#8B5CF6` background, white text, `border-radius: 9999px`, `padding: 12px 24px`, subtle `1px solid #7C3AED` border, smooth hover lift.
   - **Secondary CTA:** Transparent/White background, `#111015` text, `1px solid #111015` border, `border-radius: 9999px`.

---

# 2. Global Navigation & Footer Architecture

## Sticky Header & Floating Dropdowns (See Screenshots 4 & 5)

- **Layout:** Left-aligned brand mark + icon; right-aligned links (`Services v`, `Work v`, `Pricing`, `About v`, `Resources v`).
- **Active State:** Active or hovered nav item turns Primary Lavender (`#8B5CF6`) with its chevron rotating 180deg.
- **Dropdown Menus:**
  - Floating white card (`border-radius: 16px`, `border: 1px solid #E6E4F0`, `box-shadow: 0 20px 40px -15px rgba(17, 16, 21, 0.08)`, `padding: 16px`).
  - **Services Dropdown:** Vertical single-column list with crisp 20px monochrome stroke icons on the left (Mobile App Dev, SaaS & Web App Dev, AI Solutions & WhatsApp Agents, Backend & API, Website Dev, UI/UX & Product Design, DevOps, Cybersecurity, Technical Compliance, Project Management, MVP Development).
  - **Work Dropdown:** Clean typographic list (`All Work`, followed by 4 featured case study names, and `Testimonials`).

## Global Footer

- Preceded by an Obsidian (`#0A090F`) Pre-Footer CTA banner: Centered H2 ("Tell us what you are building. **We will help define the next phase.**") + Dual Pill CTAs (`Book a call` in Lavender + `View Our Work` in dark outline).
- **Footer Grid:** 5-column layout on `#0A090F`.
  - Col 1: Brand Logo, 2-line value prop, full-width Lavender pill CTA (`Book a call`), direct email, and location tag.
  - Cols 2–4: Structured sitemap links (`Services`, `Work`, `Company`, `Resources`).
  - Col 5: Signature architectural/classical illustration (an illuminated stone archway with a soft lavender glow).

---

# 3. Page-by-Page Blueprint

## PAGE 1: Home (`/` - Reference Screenshot 2)

1. **Centered Editorial Hero:**
   - Subtle grid background. Eyebrow: `"Plan. Build. Launch."`
   - H1: `"A design & development team for "` + `"ambitious founders"` (in bold `#8B5CF6`).
   - Subtitle explaining how the agency brings proven product, design, and engineering execution from idea to launch.
   - Dual centered pill CTAs (`Book a call` + `View Our Work`).
   - Full-width dramatic hero artwork below the fold blending seamlessly into the dark metrics section.
2. **Obsidian Metrics Bar (`#0A090F`):**
   - Intro paragraph centered above a 4-column hair-line divided stat row: `28k+` (Users across products), `8+` (Products shipped), `3+` (Core industries), `2wks` (Typical discovery sprint). Plus symbols (`+`) styled in `#8B5CF6`.
3. **Featured Work Grid (`#F6F4FF` background):**
   - Laurel wreath icon + H2: `"Products that had to work for **real users.**"`
   - 2-column Bento grid (6 cards). Each card features a rich visual mockup header, category tags, project title, 2-line outcome summary, and link.
   - Bottom outline button: `"View All Work"`.
4. **Service Quadrant Grid (White background):**
   - Left sticky column: H2 `"One team for product, design and **engineering.**"` + description + `"Explore Services"` button.
   - Right 2x2 grid: Card 1 is highlighted in solid Lavender (`#8B5CF6` with white text); Cards 2, 3, and 4 are in Soft Lavender Tint (`#F6F4FF`). Bottom pill tag strip showing secondary capabilities.
5. **Tech Stack Matrix (`#F6F4FF` background):**
   - H2: `"A stack for products that need to **launch and last.**"`
   - Clean 2-row monochrome icon grid (React, Next.js, Node.js, TypeScript, Python, AWS, Docker, PostgreSQL, etc.).
6. **Delivery Ownership Video/Image Banner (`#0A090F`):**
   - H2: `"One team across product, design and **engineering.**"`
   - Large cinematic team collaboration image with centered overlay typography: `"Named owners. Clear handover."`
7. **5-Step Process Strip (White background):**
   - H2: `"Five phases from problem to **handover.**"`
   - 5 horizontal columns with lavender numbers (`01` to `05`): _Discovery, Design, Build, Test, Launch_.
8. **Client Testimonials (`#F6F4FF` background):**
   - H2: `"What clients say after **the work ships.**"`
   - 2x2 grid of clean white quote cards with client avatars, names, and founder titles.
9. **FAQ Accordion (White background) & Insights Blog Grid (`#F6F4FF` background):**
   - Centered 1-column accordion (`"Before we talk, **quick answers.**"`).
   - 3-column editorial article cards (`"Guides for people who have to make **the product decision.**"`).

## PAGE 2: Pricing (`/pricing` - Reference Screenshot 1)

1. **Split Hero (White grid background):**
   - Left: Eyebrow `Pricing`, H1 `"We quote a phase **after discovery.**"`, subtitle explaining 4–8 week fixed-scope phases, dual CTAs.
   - Right: High-contrast balance scale illustration.
2. **Core Delivery Phases Stack (White background):**
   - H2: `"Core delivery **phases.**"`
   - Vertical stack of 5 full-width horizontal row cards (`1px solid #E6E4F0`).
   - Each row has: Left icon + Service Title + description + `"Quoted after a short discovery"` badge; Center-Right bold Lavender timeline (`"4–8 week phase"`); Far-Right `"Details v"` accordion trigger.
3. **Unit of Work 2x2 Grid:**
   - Left: H2 `"The unit of work is **a phase.**"`
   - Right: 2x2 hairline grid (_Focused Build Phase, Launch-Ready MVP, Continuation Phase, Specialist Support_). Each has a lavender sub-label (`2–4 weeks` / `4–8 weeks`).
4. **Fee Breakdown Split Section (`#F6F4FF` background):**
   - Left: H2 `"What the fee is **paying for.**"`
   - Right: 2-column checklist with bottom horizontal hairlines + vertical list of interactive service links.
5. **Quote Drivers (4-Column Grid) & Dark Callout Banner:**
   - H2: `"What moves **the quote.**"` -> 4 columns (_Platforms, Complexity, Integrations, Starting point_).
   - Dark `#0A090F` banner: `"Large products become a **sequence of phases.**"`
6. **Pricing FAQ Accordion (`#F6F4FF` background):**
   - Centered accordion list with `+` expand icons.

## PAGE 3: About (`/about` - Reference Screenshot 3)

1. **Split Hero:**
   - Left: Eyebrow `About`, H1 `"Somebody has to **own the outcome.**"`, description, dual CTAs.
   - Right: Hand holding a torch with a lavender-tinted flame.
2. **Operating Context Split (`#F6F4FF` background):**
   - Left: H2 `"We get software into production **on a controlled timeline.**"` + 2 editorial paragraphs.
   - Right: Dark `#0A090F` card with rounded corners: `"Based in [Your Location]."` + `"Built for production."` (in `#8B5CF6`).
3. **Operating Standards (3x2 Grid - White background):**
   - H2: `"The standards behind **the work.**"`
   - 6 bordered cells: _Clarity before code, Speed with quality, Visible scope changes, Production readiness, Security & privacy, Handover you can run_.
4. **Team Roster (`#F6F4FF` background):**
   - H2: `"Named owners for **every engagement.**"`
   - 5-column vertical card grid with portrait photography, lavender-colored names, roles, and 2-line bio responsibilities.
5. **Corporate Ledger Table (White background):**
   - H2: `"The company behind **[Agency Name]**"`
   - Clean 2-column key-value spec table with horizontal hairlines (_Legal entity, Trading name, Company type, Registration number, Country, Operating model_).

---

# 4. Technical & Implementation Requirements

- Build with semantic HTML5, modern CSS/Tailwind (using custom CSS variables for the Lavender palette), and clean, modular component architecture.
- Ensure all accordions (Pricing rows, FAQs) and header dropdowns (`Services`, `Work`, `About`) are fully interactive with smooth transitions.
- Enforce strict mobile responsiveness: collapse multi-column grids to single-column stacks on `<768px` viewports and convert the desktop dropdown nav into a clean slide-over mobile drawer.
