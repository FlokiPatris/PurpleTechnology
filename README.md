# Purple Technology — Registration QA Automation Task (Brno)

This repository is a **QA automation showcase task** focused on the registration flow for Purple Technology.
It demonstrates how to combine:

- structured QA analysis,
- risk-based test design,
- and practical Playwright + TypeScript automation.

The goal is to evaluate and document the quality of the registration experience (Individual + Corporate), highlight release risks, and provide a maintainable starting point for regression coverage.

## What this project is for

This project serves as a practical assignment deliverable for Purple Technology in Brno, covering:

- investigation of the registration form behavior,
- prioritization of critical defects,
- conversion of findings into concrete test scenarios,
- and implementation of automated tests for the highest-impact paths.

In short: it is not only "tests", but a complete **analysis → scenarios → automation** QA workflow.

## Project structure

- `tests/positive/` — positive registration and navigation flows.
- `tests/negative/` — validation, gating, and error behavior.
- `pages/RegistrationPage.ts` — page object abstraction for the registration page.
- `fixtures/registrationFixtures.ts` — shared test setup/fixtures.
- `constants/users.ts` — reusable test data.
- `docs/registration-QA-report.md` — defect report with severity and release impact.
- `docs/test-scenarios.md` — scenario catalog with priorities.
- `docs/architecture.md` — architecture overview.
- `docs/notes.md` — process notes from analysis and implementation.

## Test summary

The automated suite currently covers key **P0/P1-style** registration risks, including:

### Positive coverage

- Individual registration happy path.
- Corporate registration entry points.
- Language selector behavior.

### Negative coverage

- Required field validation.
- Consent requirement (terms/privacy gate).
- Email format validation.
- Phone number validation.
- Password format validation.
- Submit button enable/disable gating logic.

## Key quality findings

Based on the QA report, the registration flow contains multiple severe issues (including blockers), such as:

- inability to complete some onboarding paths,
- unreliable validation behavior,
- and state corruption risks in language switching.

Current release-readiness conclusion in the report: **FAILED**.

## Tech stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js

## Run locally

```bash
npm install
npx playwright install
npm test
```

Useful alternatives:

```bash
npm run test:ui
npm run test:headed
npm run test:debug
```

## Notes

- The suite is designed as a baseline that can be extended with additional scenario IDs from `docs/test-scenarios.md`.
- For CI, prefer unique generated data (email/phone) to reduce collisions and flakiness.
