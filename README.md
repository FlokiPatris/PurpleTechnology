# Purple Technology — Registration QA Automation Task

This repository contains a QA automation showcase task for **Purple Technology**, focused on the registration flow quality of a trading platform.

## TL;DR (30 seconds)

- **What was tested:** High-priority registration flows (Individual + Corporate) and critical validation behavior using Playwright + TypeScript.
- **What is broken:** Multiple blocker/critical defects currently prevent reliable onboarding (including blocked core flows and language selector instability).
- **Current release decision:** **FAILED** (see QA report conclusion).

## Purpose

The assignment combines:
- QA analysis,
- risk-based test scenario design,
- and Playwright + TypeScript automation implementation.

The main goal is to evaluate the registration experience (Individual + Corporate), identify critical defects, and provide maintainable automated regression coverage for high-priority risks.

## Current status (Implemented | Blocked | Planned)

| Scenario ID | Scenario | Priority | Status | Notes |
| --- | --- | --- | --- | --- |
| [REG-P01](docs/test-scenarios.md#reg-p01) | Successful Individual Registration | P0 | Blocked | Implemented as `test.fixme` (product defect prevents verification). |
| [REG-P02](docs/test-scenarios.md#reg-p02) | Corporate Registration Entry Points | P0 | Blocked | Implemented as `test.fixme` (corporate flow blocked). |
| [REG-P03](docs/test-scenarios.md#reg-p03) | Language Selection | P0 | Blocked | Implemented as `test.fixme` (language/session corruption). |
| [REG-P04](docs/test-scenarios.md#reg-p04) | Country Selection Updates Dial Code | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-P05](docs/test-scenarios.md#reg-p05) | Password Visibility Toggle | P2 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-P06](docs/test-scenarios.md#reg-p06) | Tab Switching Stability | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-P07](docs/test-scenarios.md#reg-p07) | Navigation Links | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-N01](docs/test-scenarios.md#reg-n01) | Required Fields Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N02](docs/test-scenarios.md#reg-n02) | Consent Required | P0 | Blocked | Implemented as `test.fixme` (gating issue in current build). |
| [REG-N03](docs/test-scenarios.md#reg-n03) | Email Format Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N04](docs/test-scenarios.md#reg-n04) | Phone Number Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N05](docs/test-scenarios.md#reg-n05) | Password Format Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N06](docs/test-scenarios.md#reg-n06) | Submit Button Gating | P0 | Blocked | Implemented as `test.fixme` (submit remains disabled). |
| [REG-N07](docs/test-scenarios.md#reg-n07) | Password Strength Evaluation | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-N08](docs/test-scenarios.md#reg-n08) | Field Length Boundaries | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-N09](docs/test-scenarios.md#reg-n09) | Error Message Consistency | P1 | Planned | Scenario documented; no dedicated spec yet. |

> Note: Table columns are clickable links, but native GitHub Markdown tables are not sortable.

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
