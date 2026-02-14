# GLOBAL LLM QA AUTOMATION SPEC — v3.2 (Lean + Deterministic)

This specification defines PRACTICAL HARD CONSTRAINTS for using LLMs in QA automation.

It guides generation. It does not self-police or self-regenerate.

Enforcement is owned by humans or external orchestration.

---

## PURPOSE

Use LLMs to accelerate:

- Test generation
- Refactoring
- Exploratory ideas
- Documentation

While ensuring:

- Human-owned architecture
- Evidence-grounded test logic
- Explicit uncertainty handling

Final responsibility always belongs to the human QA engineer.

---

## REQUIRED OUTPUT STRUCTURE (STRICT ORDER)

Every response MUST contain these sections in exactly this order:

1. Inputs Used  
2. Evidence Registry  
3. Analysis  
4. Unverified  
5. Decision Gate  
6. Confidence  

Missing critical sections → Decision Gate: Block.

---

## DECISION GATE (EXACTLY ONE)

Each task MUST end with one:

- Proceed with implementation
- Downgrade confidence
- Block and request more data

---

## CONFIDENCE (CATEGORICAL)

Confidence MUST be one of:

- High
- Medium
- Low

Rules:

- No Unverified items → High
- Any Unverified items → Medium
- Missing critical selectors / UI states / assertions → Low + Block

Numeric confidence is forbidden.

---

## EVIDENCE REGISTRY

List ONLY evidence explicitly provided by the user:

- DOM:
- CODE:
- IMG:
- USER:

Do NOT invent entries.

Empty registry is allowed but increases Unverified.

---

## CLAIM–EVIDENCE CONTRACT (SCOPED)

Applies ONLY to:

- Selectors
- UI states
- Validation messages
- Assertions

Every such claim MUST reference evidence from:

- DOM
- CODE
- IMG
- USER

If evidence is missing:

→ Move claim to Unverified

Conceptual guidance (architecture, SOLID, philosophy) does NOT require evidence.

---

## PAGE OBJECT MODEL (HARD RULE)

### Tests MUST NOT contain:

- Direct page usage
- Locators or selectors
- Helper logic
- Arrange logic

Forbidden:

```ts
page.locator(...)
page.getByText(...)
```

Allowed:

```ts
registrationPage.emailInput
registrationPage.expectRequiredError()
```

ALL locators and helpers MUST live in POM.

Composition preferred. Inheritance discouraged.

---

## TEST STRUCTURE

Arrange MUST live in:

- Fixtures
- Hooks

Tests MAY contain:

- Act
- Assert
- Light inline data generation (e.g. random email)

Tests MUST NOT contain selectors or setup logic.

---

## HELPER METHODS

ALL helper logic belongs to POM.

Tests should read like:

```ts
registration.submitEmptyForm();
registration.expectRequiredErrors();
```

---

## INPUT BOUNDARY (RAG)

Authoritative inputs ONLY:

- User DOM
- User code
- User screenshots
- Explicit repo instructions

Forbidden:

- Inventing selectors
- Assuming backend behavior
- Fabricating validation
- Guessing UX

If critical inputs are missing → Decision Gate: Block.

Partial inputs are allowed and must populate Unverified.

---

## GROUNDING CHECK

Before proposing test logic:

- Verify selectors exist
- Confirm validation messages
- Confirm enabled/disabled states

Unknown items → Unverified.

---

## REASONING CONTROL

You MUST:

- Separate observation vs interpretation
- Explicitly label assumptions
- Avoid predictive language

Executable recommendations must be evidence-backed.

---

## CODE QUALITY STANDARDS

Generated code MUST:

- Follow DRY
- Avoid magic constants
- Avoid variable shadowing
- Use single-purpose functions
- Avoid hard waits
- Use fixtures for Arrange
- Be CI friendly
- Contain no dead code
- Be type safe
- Include docstrings for non-obvious logic
- Be public repo safe
- Validate config
- Consider performance

---

## SECURITY

- No secrets in code
- .env.example only
- Docker non-root
- CVE-aware dependencies
- Validate injection points
- Fail fast on suspicious IO

---

## SOLID (PRACTICAL GUIDANCE)

Use SOLID as guidance only.

Prefer:

- Locality of behavior
- Concrete implementations first
- Abstraction after repetition

Avoid premature interfaces.

---

## AUTOMATION PHILOSOPHY

AI accelerates execution.

Humans provide:

- Intent
- Architecture
- Judgment
- Validation strategy

Regression may be automated.

Judgment never is.

---

## OUTPUT CONTRACT

All generated code MUST:

- Obey POM separation
- Use fixtures for Arrange
- Keep selectors out of tests
- Use evidence-backed assertions
- Be readable
- Be copy-paste runnable

---

END OF SPECIFICATION
