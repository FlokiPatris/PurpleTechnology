# Registration Form — Test Scenarios (Automation Ready)

Scope: Individual & Corporate Registration  
Format: Scenario-level (Playwright compatible)

---

# 🟢 POSITIVE SCENARIOS — Core User Flows (Happy Path)

Goal: Verify users who provide valid data can successfully proceed.

---

## REG-P01 — Successful Individual Registration

**Goal:** User creates an individual trading account  
**Preconditions:** Clean session, Individual tab selected  
**Data:** Valid first name, last name, email, phone, strong password, consent checked  

**Checks:**
- Submit button enabled
- User can click “Start trading”
- Success toast or next onboarding step appears

---

## REG-P02 — Corporate Registration Entry Points

**Goal:** Corporate user can start onboarding  
**Preconditions:** Corporate tab  
**Checks:**
- Open Live Corporate navigates correctly
- Open Demo Corporate navigates correctly

---

## REG-P03 — Country Selection Updates Dial Code

**Goal:** Dial code reflects selected country  
**Preconditions:** Individual tab  
**Data:** Change country  
**Checks:**
- Dial code updates automatically

---

## REG-P04 — Language Selection Works Correctly

**Goal:** Dropdown displays correct languages and page switches language  
**Preconditions:** Registration page loaded  
**Data:** Select each available language 
**Checks:**
- Selected language label updates
- Page content updates to chosen language
- Session remains intact

---

## REG-P05 — Password Visibility Toggle

**Goal:** User can toggle password visibility  
**Preconditions:** Individual tab  
**Data:** Enter password  
**Checks:**
- Default input type = password
- Toggle → input becomes visible
- Toggle again → masked
- Password value unchanged

---

## REG-P06 — Tab Switching Stability

**Goal:** Switching tabs does not corrupt UI state  
**Checks:**
- Individual form visible on Individual tab
- Corporate content visible on Corporate tab
- No cross-content bleed
- Page remains usable

---

## REG-P07 — Navigation Links

**Goal:** Supporting links work correctly  
**Preconditions:** Registration page  
**Checks:**
- Register/Login link works
- Marketing links load valid content

---

# 🔴 NEGATIVE SCENARIOS — Validation & Protection

Goal: Verify system blocks incorrect input and guides user safely.

---

## REG-N01 — Required Fields Validation

**Goal:** User is guided when mandatory fields are empty  
**Preconditions:** Individual tab  
**Data:** Leave First Name, Last Name, Email empty  
**Checks:**
- Required validation shown
- Submit disabled

---

## REG-N02 — Consent Required

**Goal:** User must accept Terms & Privacy  
**Preconditions:** Individual tab, all fields valid  
**Data:** Consent unchecked  
**Checks:**
- Submit disabled
- After checking consent → submit enabled

---

## REG-N03 — Email Format Validation

**Goal:** Prevent invalid email submission  
**Preconditions:** Individual tab  
**Data:** invalid-email  
**Checks:**
- Email validation error
- Submit disabled

---

## REG-N04 — Phone Number Validation

**Goal:** Phone fields accept numeric values only  
**Preconditions:** Individual tab  
**Data:** Alphabetic / special chars  
**Checks:**
- Validation error
- Submit disabled

---

## REG-N05 — Password Format Validation

**Goal:** Password respects format rules  
**Preconditions:** Individual tab  
**Data:**
- < 6 chars
- Leading space
- Trailing space  
**Checks:**
- Format error message displayed
- Submit disabled

---

## REG-N06 — Password Strength Evaluation

**Goal:** Password strength reflects entered value  
**Preconditions:** Individual tab  
**Data:** Weak → Fair → Strong passwords  
**Checks:**
- Strength label updates correctly
- Color bar matches strength

---

## REG-N07 — Field Length Boundaries

**Goal:** Inputs enforce reasonable limits  
**Preconditions:** Individual tab  
**Data:** Extremely long name/email  
**Checks:**
- Input restricted or validation shown

---

## REG-N08 — Error Message Consistency

**Goal:** Validation errors appear consistently  
**Preconditions:** Individual tab  
**Checks:**
- Field visually marked error
- Error message visible near field
- Submit remains disabled

---

## REG-N09 — Submit Button Gating

**Goal:** Submit enabled only when all validation passes  
**Checks:**
- Disabled with any invalid/missing field
- Enabled only when all inputs + consent valid

---

End of scenarios.
