# Purple Technology — Registration QA Automation Task

This repository contains a QA automation showcase task for **Purple Technology**, focused on the registration flow quality of a trading platform.

## TL;DR (30 seconds)

- **What was tested:** High-priority registration flows (Individual + Corporate) and critical validation behavior using Playwright + TypeScript.
- **What is broken:** Multiple blocker/critical defects currently prevent reliable onboarding (including blocked core flows and language selector instability).
- **Current release decision:** **FAILED** (see QA report conclusion).

## Current decision

> **Release readiness: FAILED** — immediate engineering intervention required.

## Purpose

The assignment combines:
- QA analysis,
- risk-based test scenario design,
- and Playwright + TypeScript automation implementation.

The main goal is to evaluate the registration experience (Individual + Corporate), identify critical defects, and provide maintainable automated regression coverage for high-priority risks.

## Current status (Implemented | Blocked | Planned)

| Scenario | Status | Notes |
| --- | --- | --- |
| REG-P01 — Successful Individual Registration | Blocked | Marked `test.fixme` due to product defect. |
| REG-P02 — Corporate Registration Entry Points | Blocked | Marked `test.fixme` due to blocked corporate onboarding flow. |
| REG-P03 — Language Selection | Blocked | Marked `test.fixme` due to language/session corruption defect. |
| REG-N02 — Consent Required | Blocked | Marked `test.fixme` due to consent gating defect. |
| REG-N06 — Submit Button Gating | Blocked | Marked `test.fixme` due to submit gating defect. |
| Remaining automated specs in `tests/positive` and `tests/negative` | Implemented | Active regression checks. |
| Additional lower-priority scenarios from `docs/test-scenarios.md` | Planned | Candidate expansion after blocker fixes. |

## Traceability (scenario → spec)

| Scenario ID | Spec file | Current status |
| --- | --- | --- |
| REG-P01 | `tests/positive/REG-P01.Successful-Individual-Registration.spec.ts` | Blocked (`fixme`) |
| REG-P02 | `tests/positive/REG-P02.Corporate-Registration-Entry-Points.spec.ts` | Blocked (`fixme`) |
| REG-P03 | `tests/positive/REG-P03.Language-Selection.spec.ts` | Blocked (`fixme`) |
| REG-N02 | `tests/negative/REG-N02.Consent-Required.spec.ts` | Blocked (`fixme`) |
| REG-N06 | `tests/negative/REG-N06.Submit-Button-Gating.spec.ts` | Blocked (`fixme`) |

## Known limitations

- Some critical scenarios are intentionally `fixme` because application behavior is currently blocked by confirmed defects.
- The submit CTA appears in-app as **"Start trending"** in defect contexts; this is the product text under test, not intentional project wording.
- Tracking IDs in comments use internal-style identifiers (e.g., `REG-1102`) and are not linked to public ticket URLs.

## Version assumptions

- Node.js 20+ (recommended)
- npm 10+
- Playwright installed via project dependencies (`@playwright/test`)

## Setup (local)

### 1) Clone the repository
```bash
git clone https://github.com/FlokiPatris/PurpleTechnology.git
cd PurpleTechnology
```

### 2) Install dependencies
```bash
npm install
```

### 3) Install Playwright browsers
```bash
npx playwright install
```

## Run tests

### Run full test suite
```bash
npm test
```

### Run tests in UI mode
```bash
npm run test:ui
```

### Run tests in headed mode
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

## How to evaluate this submission

1. Read the QA outcome and severity analysis in [`docs/registration-QA-report.md`](docs/registration-QA-report.md).
2. Review scenario intent and priorities in [`docs/test-scenarios.md`](docs/test-scenarios.md).
3. Verify implementation mapping in the `tests/positive` and `tests/negative` folders.
4. Optionally run `npm test` locally to inspect passing vs blocked (`fixme`) specs.

## For recruiters — quick links

- QA report: [`docs/registration-QA-report.md`](docs/registration-QA-report.md)
- Test scenarios: [`docs/test-scenarios.md`](docs/test-scenarios.md)
- Implementation notes: [`docs/notes.md`](docs/notes.md)
- QA automation spec: [`docs/ai/qa-automation-spec.md`](docs/ai/qa-automation-spec.md)
- Strict prompt auditor: [`docs/ai/strict-prompt-auditor.md`](docs/ai/strict-prompt-auditor.md)

## Project structure

- `tests/positive/` — positive registration and navigation flows
- `tests/negative/` — validation and negative scenarios
- `pages/RegistrationPage.ts` — registration page object
- `fixtures/registrationFixtures.ts` — shared fixtures
- `constants/users.ts` — reusable test data
- `docs/` — supporting QA documentation
- `docs/ai/` — AI prompt/spec artifacts used in the workflow
