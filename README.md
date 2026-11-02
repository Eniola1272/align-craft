# Align Craft

The editable agency website lives directly in this project root. Built with **Next.js App Router, React and TypeScript**, with the lavender / obsidian design from the supplied brief.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Changes to the source files update automatically while the development server is running.

## Where to edit

| File                              | Purpose                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| `src/app/page.tsx`                | Home route                                                       |
| `src/app/pricing/page.tsx`        | Pricing route and metadata                                       |
| `src/app/about/page.tsx`          | About route and metadata                                         |
| `src/content/home.tsx`            | Home sections and copy                                           |
| `src/content/pricing.tsx`         | Pricing sections and FAQs                                        |
| `src/content/about.tsx`           | About sections and copy                                          |
| `src/content/site.ts`             | Shared contact email, services and project data                  |
| `src/content/project-art.tsx`     | Concept project mockups                                          |
| `src/components/header.tsx`       | Responsive navigation and dropdowns                              |
| `src/components/footer.tsx`       | Shared footer                                                    |
| `src/components/site-dialogs.tsx` | Enquiries, project previews and article dialogs                  |
| `src/app/editorial.css`           | Editorial homepage, interface studies, header and footer styling |
| `src/components/project-card.tsx` | Reusable concept showcase cards                                  |
| `src/content/journal.ts`          | Journal metadata and article text                                |
| `src/app/globals.css`             | Design tokens, typography, layouts and responsive rules          |
| `public/assets/`                  | Archived artwork; no image is loaded in the current hero         |

The route files compose ordinary React components. There is no runtime HTML injection or legacy JavaScript renderer.

## Verify and build

```sh
npm run typecheck
npm run build
npm start
```

`npm start` serves a completed production build on http://localhost:3000.

## Enquiries and content

The enquiry form prepares an email to **contact@aligncraft.com.ng** for visitors to review and send in their own email app. No credentials or email service are needed. It also offers a copyable summary.

Projects are explicitly labelled original concepts. Replace these with your actual portfolio when available. The site avoids invented client testimonials and team identities.

The landing page has an asymmetric, text-led hero with the audience typewriter animation and a clearly labelled concept interface. All six interface studies are editable React/CSS components, with project metadata in `src/content/site.ts`. There are no bitmap hero or stock-photo requests. Inter loads from Google Fonts.

The four primary concepts are followed by an expandable pair of additional studies. Service enquiries preselect the relevant service. Project previews explain the specific design challenge and approach; all screen data is illustrative.

## Git and Vercel

This folder is the complete application and Git repository. Open `align-craft` directly in your editor and run all commands here.

- Repository: https://github.com/Eniola1272/align-craft
- Production branch: `main`
- Vercel framework: **Next.js**
- Vercel Root Directory: **repository root** (leave blank or use `.`), not `align-craft`
- Build Command: `npm run build`
- Install Command: `npm ci`
- Output Directory: `.next`

`vercel.json` declares the framework and build settings. Commit and push changes from this folder to deploy through the connected Vercel Git integration. Dependencies and generated build files are ignored by Git.

The old static site and generated parent-directory files were retained outside this repository in `../migration-backup-2026-11-02/`. They are not part of the Vercel application.
