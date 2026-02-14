# Registration Form QA Report  
Scope: Individual & Corporate Tabs  
Role: Manual + Automation QA  
Environment: Web (Desktop exploratory + Playwright readiness)

---

## Summary

The registration flow contains multiple blocking defects that prevent successful submission and significantly impact usability, validation integrity, and user trust.

Primary issues:

- Form cannot be submitted even with all fields filled
- Required-field behavior is inconsistent
- DOM field mappings are incorrect
- Password strength logic is unreliable
- Corporate flow is non-functional
- Multiple broken links (404 / no-op)
- Validation rules are weak or missing

Severity ranges from **Critical (submission impossible)** to **Medium (UX + validation issues)**.

---

# Individual Tab

## First Name / Last Name

### Findings

- DOM mapping is incorrect:
  - `data-testid="lastName"` contains *First name*
  - `data-testid="firstName"` contains *Last name*

**Severity:** Medium

- No minimum length enforced (1 character accepted)
- No maximum length enforced (unbounded input)

**Severity:** Medium

### Expected

- Correct field identifiers
- Minimum length (≥ 2–3 chars)
- Maximum length (128–256 chars)

---

## Email

### Findings

- Format validation works
- No max length enforced

**Severity:** Medium

---

## Country of Residence

### Findings

- Changing country updates dial code (appears correct)
- Legal entity text changes per country (Tradit Ltd vs Axiory Global)

**Status:** Unverified business rule

---

## Phone Number / Dial Code

### Findings

- Fields are swapped:
  - “Phone number” contains `+420`
  - “Dial code” accepts full phone number

**Severity:** High

- Both fields accept letters and unlimited length

### Expected

- Dial code: numeric, max ~3–4 chars  
- Phone number: numeric only, ~9–10 digits  

---

## Password

### Findings

- Strength meter unreliable:
  - Weak passwords sometimes marked *Strong*
  - Secure passwords marked *Weak*
- Bar color mismatches label
- Visibility toggle works

**Severity:** High

---

## Affiliate Code

- Checkbox reveals nothing

**Severity:** Medium

---

## Required Field Behavior

- Name + email show "Required"
- Phone fields show "Invalid format" instead

**Severity:** Medium

---

## Submit Button

- Typo: **Start trending**
- Button stays disabled even with valid data
- Submission impossible

**Severity:** Critical

---

## Register Now

- Redirects to 404

**Severity:** High

---

## Marketing Links

- Execution statistics → error page
- Live chat claim is false

**Severity:** Medium

---

# Corporate Tab

Corporate onboarding is non-functional.

- Register Now → 404
- Open Live Corporate → unreadable symbols / no action
- Open Demo Corporate → no action

**Severity:** Critical

---

# Language Selector

- Shows repeated "English"
- Actual languages mixed
- One option errors

**Severity:** Medium

---

# Automation Strategy

## Automatable

- Required validation
- Email format
- Phone numeric rules
- Password strength
- Submit enablement
- Country → dial code
- Broken links

## Manual / Contract Needed

- Legal entity logic
- Password policy definition
- Marketing content

---

# CI/CD Data Strategy

### Email

Use deterministic generation:

qa+<runId>-<worker>@example.test

### Phone

base + worker + runId

### Cleanup

Prefer API teardown, otherwise always-new identities.

---

# Critical Blockers

1. Form cannot submit
2. Phone/dial swapped
3. Password strength broken
4. Corporate flow dead
5. Multiple 404s
6. Inconsistent required validation

---

# Conclusion

Registration is **not production ready**.

Major risks:

- User onboarding blocked
- Validation unreliable
- Corporate clients blocked
- Security signals misleading

Automation should begin after submission + validation fixes.

---

End of report.
