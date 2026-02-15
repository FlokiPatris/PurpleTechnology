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
| [REG-P05](docs/test-scenarios.md#reg-p05) | Tab Switching Stability | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-P06](docs/test-scenarios.md#reg-p06) | Navigation Links | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-P07](docs/test-scenarios.md#reg-p07) | Password Visibility Toggle | P2 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-N01](docs/test-scenarios.md#reg-n01) | Required Fields Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N02](docs/test-scenarios.md#reg-n02) | Consent Required | P0 | Blocked | Implemented as `test.fixme` (gating issue in current build). |
| [REG-N03](docs/test-scenarios.md#reg-n03) | Email Format Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N04](docs/test-scenarios.md#reg-n04) | Phone Number Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N05](docs/test-scenarios.md#reg-n05) | Password Format Validation | P0 | Implemented | Automated in negative suite. |
| [REG-N06](docs/test-scenarios.md#reg-n06) | Submit Button Gating | P0 | Blocked | Implemented as `test.fixme` (submit remains disabled). |
| [REG-N07](docs/test-scenarios.md#reg-n07) | Password Strength Evaluation | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-N08](docs/test-scenarios.md#reg-n08) | Field Length Boundaries | P1 | Planned | Scenario documented; no dedicated spec yet. |
| [REG-N09](docs/test-scenarios.md#reg-n09) | Error Message Consistency | P1 | Planned | Scenario documented; no dedicated spec yet. |

## Version assumptions

- Node.js 20+ (recommended)
- npm 10+
- Playwright installed via project dependencies (`@playwright/test`)

## Setup (local)
### 1. Install Git
https://git-scm.com/install/windows

### 2. Clone the repository and navigate there
```bash
git clone https://github.com/FlokiPatris/PurpleTechnology.git && cd PurpleTechnology
```

### 3. Install dependencies
```bash
npm install
```

### 4. Install Playwright browsers
```bash
npx playwright install
```

## Run tests

> ⚠️ Important note about parallelism  
> Tests were verified locally with **3 workers**, however the target environment can be slow and may rate-limit parallel execution.  
> For maximum reliability (especially on CI or first run), use **1 worker**.

If tests pass with `--workers=1` but fail at higher worker counts, treat this as an environment/performance limitation rather than a functional regression.

### Recommended (faster, may be flaky depending on environment)
```bash
npm test -- --workers=2
```

### Stable mode (most reliable)
```bash
npm test -- --workers=1
```

### UI mode
```bash
npm run test:ui -- --workers=1
```

### Headed mode
```bash
npm run test:headed -- --workers=1
```

### Debug mode
```bash
npm run test:debug -- --workers=1
```

### Run a single spec
```bash
npx playwright test tests/negative/REG-N01.Required-Fields-Validation.spec.ts --workers=1
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
