# Homepage redesign review

## Starting point

Reviewed the supplied written brief, earlier visual references and the current Next.js implementation. No new screenshot was attached with the written brief. Browser automation reported no available browser, so this review does not claim visual screenshot verification.

The previous page had a centred, predominantly typographic hero, six similarly framed mockups, a service-card grid and a simple process row. Project descriptions were shared with the dialogs, but the visual studies and article metadata were repetitive. The closing CTA repeated the earlier page pattern.

## Design decisions

- Keep the pickaxe identity, purple accent and typewriter audience line. Use an asymmetric hero, a more restrained off-white surface and a clear Start a project action.
- Add a labelled, code-native workspace study below the heading, rather than returning to a bitmap hero illustration.
- Give each concept its own interface and composition. Display four primary studies with two further studies behind a native disclosure. All sample data and projects remain illustrative.
- Put project names, industries, scope and intended user value in reusable project cards. Use project-specific challenge and approach text in each dialog.
- Replace the service-card grid with editorial rows showing business need, deliverables and a contextual enquiry action.
- Explain the connected design/development approach using concrete practices. Avoid unverified client logos, testimonials and performance figures.
- Use a five-step timeline with a concrete output for each step.
- Consolidate journal metadata and article content, introduce publication-style covers, and make the closing enquiry area visually distinct.

## Implementation map

- `src/content/home.tsx`: homepage architecture and page copy.
- `src/app/editorial.css`: design tokens, responsive layouts, interface studies and shared header/footer styling.
- `src/components/project-card.tsx`: reusable showcase card.
- `src/content/project-art.tsx`: six editable interface concepts.
- `src/content/site.ts`: project metadata, challenge, approach and scope.
- `src/content/journal.ts`: shared article metadata and body copy.

## Verification

Production build and TypeScript checks run against the completed implementation. Server-rendered route, heading, anchor, disclosure, concept-label and enquiry checks are performed locally. Text and CTA contrast are checked numerically. Browser interaction and visual screenshot QA remain unverified because no browser is available in the connected environment.
