# Purple Technology — Registration QA Automation Task (Brno)

This repository contains a QA automation showcase task for **Purple Technology (Brno)**, focused on the registration flow quality of a trading platform.

The assignment combines:
- QA analysis,
- risk-based test scenario design,
- and Playwright + TypeScript automation implementation.

## Purpose

The main goal is to evaluate the registration experience (Individual + Corporate), identify critical defects, and provide maintainable automated regression coverage for high-priority risks.

## Test summary

### Positive coverage
- Individual registration happy path
- Corporate registration entry points
- Language selection behavior

### Negative coverage
- Required fields validation
- Consent-required gating
- Email format validation
- Phone number validation
- Password format validation
- Submit button enable/disable gating

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

## For recruiters — quick links

- QA report: [`docs/registration-QA-report.md`](docs/registration-QA-report.md)
- Test scenarios: [`docs/test-scenarios.md`](docs/test-scenarios.md)
- Architecture overview: [`docs/architecture.md`](docs/architecture.md)
- Implementation notes: [`docs/notes.md`](docs/notes.md)
- Prompt (TypeScript add/refactor): [`prompts/add-refactor-typescript.md`](prompts/add-refactor-typescript.md)
- Prompt auditor: [`prompts/llm-prompt-auditor.md`](prompts/llm-prompt-auditor.md)

## Project structure

- `tests/positive/` — positive registration and navigation flows
- `tests/negative/` — validation and negative scenarios
- `pages/RegistrationPage.ts` — registration page object
- `fixtures/registrationFixtures.ts` — shared fixtures
- `constants/users.ts` — reusable test data
- `docs/` — supporting QA and architecture documentation
- `prompts/` — prompt engineering artifacts used in the workflow
