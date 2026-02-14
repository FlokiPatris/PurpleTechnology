# Registration Form QA Report

**Scope:** Individual & Corporate Tabs  
**Role:** Manual + Automation QA  
**Environment:** Web (Desktop exploratory + Playwright readiness)

---

## Executive Summary

The registration flow is **NOT production ready**.

Multiple **BLOCKER** and **CRITICAL** defects prevent successful onboarding, break page state, and undermine validation integrity and user trust.

Primary risks:

- Users cannot complete registration
- Corporate onboarding is fully blocked
- Language selector corrupts session state
- Validation and security indicators are unreliable

Immediate remediation is required before any release.

---

# Severity-Based Findings

## 🚫 BLOCKER

1. **Form submission impossible**
   - Submit button remains disabled even when all required fields are correctly filled.

2. **Language selector – 6th option**
   - Selecting the 6th language breaks the registration page entirely.
   - Recovery requires:
     - Clearing cookies, OR
     - Opening a new private/incognito tab.

3. **Corporate onboarding completely non-functional**
   - Register Now → 404
   - Open Live Corporate → unreadable symbols / no action
   - Open Demo Corporate → unreadable symbols / no action

---

## 🔴 CRITICAL

- “Register Now” redirects to **404**
- Corporate primary CTAs inaccessible (see Blockers)

---

## 🟠 HIGH

### Phone Number / Dial Code

- Fields swapped:
  - “Phone number” contains `+420`
  - “Dial code” accepts full phone number
- Both fields:
  - Accept letters
  - Have unlimited length
  - No numeric enforcement

### Password Strength Meter

- Weak passwords marked **Strong**
- Secure passwords marked **Weak**
- Strength label does not match bar color

---

## 🟡 MEDIUM

### First Name / Last Name

- DOM mapping incorrect:
  - `data-testid="lastName"` contains *First name*
  - `data-testid="firstName"` contains *Last name*
- No minimum length enforced (1 character accepted)
- No maximum length enforced

### Email

- No maximum length enforced

### Affiliate Code

- Checkbox reveals no input or functionality

### Required Field Behavior

- Name + email show **Required**
- Phone fields show **Invalid format** instead of **Required**

### Marketing / UX

- Execution statistics link opens unrelated content
- “Live chat” claim is false

### Language Selector

- Shows repeated “English” instead of selected language (e.g., Russian)

### Submit Button

- Typo: **“Start trending”** instead of **“Start trading”**

---

# Expected Validation Standards

- **First / Last Name**
  - Min: 2–3 characters
  - Max: 128–256 characters

- **Email**
  - RFC-compliant format
  - Max length: 254 characters

- **Dial Code**
  - Numeric only
  - Max 3–4 digits

- **Phone Number**
  - Numeric only
  - ~9–10 digits (country dependent)

- **Password**
  - Clearly defined policy:
    - Minimum length
    - Uppercase
    - Lowercase
    - Digit
    - Special character

- **Submit Button**
  - Enabled only when all validation passes

---

# Automation Strategy

### Automatable

- Required field validation
- Email format
- Phone numeric + length rules
- Password strength logic
- Submit enablement
- Country → dial code mapping
- Broken link detection (404)
- Language selector regression (including cookie/session persistence)

### Manual / Contract Needed

- Legal entity logic by country (Tradit Ltd vs Axiory Global Ltd)
- Password policy definition
- Marketing content verification

### CI/CD Test Data Handling

I would generate unique emails and phone numbers using timestamps, CI run IDs, or Faker, store credentials in CI secrets (never in code), and run tests against staging with isolated data to prevent collisions and flaky builds.

---

# Conclusion

The registration system contains multiple **BLOCKER** and **CRITICAL** defects.

Current impact:

- Individual onboarding impossible
- Corporate clients fully blocked
- Page state corruption via language selector
- Validation and security signals unreliable

**Release readiness: FAILED.**

Immediate engineering intervention is required.
