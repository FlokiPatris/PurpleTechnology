# Test Scenarios — Registration Form

Scope: Individual & Corporate Tabs  
Style: Jira-like, automation-ready  
Framework target: Playwright (TypeScript)

---

## Legend

- **Automation:** Yes / Blocked / Manual
- **Tags:** @blocker @critical @validation @language @corporate @links

---

# BLOCKERS

## REG-B01 — Individual registration cannot be submitted
**Tags:** @blocker @smoke

**Preconditions**
- Clean session (no cookies/localStorage)
- Navigate to /register

**Steps**
1. Fill First Name with valid value
2. Fill Last Name with valid value
3. Fill Email with valid value
4. Fill Dial Code + Phone Number
5. Enter strong password

**Expected**
- Submit button becomes enabled
- User can submit form

**Actual**
- Submit button remains disabled

**Automation:** Yes (assert disabled state)


---

## REG-B02 — Language selector 6th option breaks page
**Tags:** @blocker @language

**Preconditions**
- Clean session
- Navigate to /register

**Steps**
1. Open language dropdown
2. Select 6th "English" option

**Expected**
- Language changes
- Page remains usable

**Actual**
- Page becomes inaccessible
- Requires cookie clear or private tab

**Automation:** Yes (session corruption regression)


---

## REG-B03 — Corporate onboarding unavailable
**Tags:** @blocker @corporate

**Steps**
1. Switch to Corporate tab
2. Click Open Live Corporate
3. Click Open Demo Corporate

**Expected**
- Corporate registration flow opens

**Actual**
- Unreadable symbols / no action

**Automation:** Yes


---

# CRITICAL

## REG-C01 — "Register Now" redirects to 404
**Tags:** @critical @links

**Steps**
1. Click "Already have an account? Register now"

**Expected**
- Redirect to login

**Actual**
- 404 page

**Automation:** Yes


---

# HIGH

## REG-H01 — Phone / Dial Code swapped + invalid input allowed
**Tags:** @validation

**Steps**
1. Enter letters into Phone
2. Enter long strings into Dial Code

**Expected**
- Numeric-only enforcement
- Length limits

**Actual**
- Letters accepted
- Unlimited length

**Automation:** Yes


---

## REG-H02 — Password strength incorrect
**Tags:** @validation

**Steps**
1. Enter weak password
2. Enter strong password

**Expected**
- Weak → Weak
- Strong → Strong

**Actual**
- Weak marked Strong
- Strong marked Weak

**Automation:** Yes


---

# MEDIUM

## REG-M01 — First/Last Name DOM mapping incorrect
**Tags:** @validation

**Expected**
- data-testid matches visible label

**Actual**
- firstName / lastName reversed

**Automation:** Yes


---

## REG-M02 — No min/max length on name fields
**Tags:** @validation

**Steps**
1. Enter single character
2. Enter >300 chars

**Expected**
- Validation errors

**Automation:** Yes


---

## REG-M03 — Email has no max length
**Tags:** @validation

**Automation:** Yes


---

## REG-M04 — Required field inconsistency
**Tags:** @validation

**Steps**
1. Leave all fields empty
2. Trigger validation

**Expected**
- All required fields show "Required"

**Actual**
- Phone shows "Invalid format"

**Automation:** Yes


---

## REG-M05 — Affiliate code checkbox does nothing
**Tags:** @ux

**Automation:** Yes


---

## REG-M06 — Marketing links unreliable
**Tags:** @links

- Execution statistics opens unrelated content
- Live chat claim false

**Automation:** Yes


---

## REG-M07 — Language dropdown labels incorrect
**Tags:** @language

- Always shows "English" instead of selected language

**Automation:** Yes


---

## REG-M08 — Submit button typo
**Tags:** @ux

- "Start trending" instead of "Start trading"

**Automation:** Yes


---

# HAPPY PATH (Currently Blocked)

## REG-P01 — Successful individual registration

**Status:** Blocked by REG-B01

**Automation:** Pending fix


---

# DATA STRATEGY (CI/CD)

Email examples:

```ts
qa+${Date.now()}@example.test
qa+${process.env.CI_RUN_ID}-${process.env.TEST_WORKER_INDEX}@example.test
```

Phone:

```ts
+4207${Date.now().toString().slice(-7)}
```

Principles:

- Always-new identities
- Timestamp or CI-based uniqueness
- No shared accounts
- Prefer API cleanup if available

---

End of scenarios.
