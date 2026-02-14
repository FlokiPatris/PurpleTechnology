# Registration Form — Test Scenarios (Automation Ready)

**Scope:** Individual & Corporate Registration  
**Format:** Scenario-level (Playwright compatible)

---

## Priority Legend

- **P0 – Critical (Release Blocker)**
- **P1 – High (Major Impact)**
- **P2 – Nice to Have (UX / Enhancement)**

---

# POSITIVE SCENARIOS — Core User Flows

---

<a id="reg-p01"></a>
## REG-P01 — Successful Individual Registration  
**Priority:** P0 – Critical  

**Goal:** User creates an individual trading account  
**Preconditions:** Clean session, Individual tab selected  
**Data:** Valid first name, last name, email, phone, strong password, consent checked  

**Checks:**
- Submit button enabled
- User can click “Start trading”
- Success toast or next onboarding step appears

**Reason:** Core revenue-generating flow.

---

<a id="reg-p02"></a>
## REG-P02 — Corporate Registration Entry Points  
**Priority:** P0 – Critical  

**Goal:** Corporate user can start onboarding  
**Preconditions:** Corporate tab  

**Checks:**
- Open Live Corporate navigates correctly
- Open Demo Corporate navigates correctly

**Reason:** Corporate clients are currently blocked.

---

<a id="reg-p03"></a>
## REG-P03 — Language Selection  
**Priority:** P0 – Critical  

**Goal:** Dropdown displays correct languages and page switches language  
**Preconditions:** Registration page loaded  

**Data:** Select each available language  

**Checks:**
- Selected language label updates
- Page content updates to chosen language
- Session remains intact

**Reason:** 6th 'English' language option currently breaks the page and corrupts session state.

---

<a id="reg-p04"></a>
## REG-P04 — Country Selection Updates Dial Code  
**Priority:** P1 – High  

**Goal:** Dial code reflects selected country  
**Preconditions:** Individual tab  

**Data:** Change country  

**Checks:**
- Dial code updates automatically

**Reason:** Impacts phone validation and conversion but not a full blocker.

---


<a id="reg-p05"></a>
## REG-P05 — Tab Switching Stability  
**Priority:** P1 – High  

**Goal:** Switching tabs does not corrupt UI state  

**Checks:**
- Individual form visible on Individual tab
- Corporate content visible on Corporate tab
- No cross-content bleed
- Page remains usable

**Reason:** UI stability impacts both flows.

---

<a id="reg-p06"></a>
## REG-P06 — Navigation Links  
**Priority:** P1 – High  

**Goal:** Supporting links work correctly  
**Preconditions:** Registration page  

**Checks:**
- Register/Login link works
- Marketing links load valid content

**Reason:** Impacts trust and onboarding flow but not a hard blocker.

---

<a id="reg-p07"></a>
## REG-P07 — Password Visibility Toggle  
**Priority:** P2 – Nice to Have  

**Goal:** User can toggle password visibility  
**Preconditions:** Individual tab  

**Data:** Enter password  

**Checks:**
- Default input type = password
- Toggle → input becomes visible
- Toggle again → masked
- Password value unchanged

**Reason:** UX enhancement; does not block submission.

---

# NEGATIVE SCENARIOS — Validation & Protection

---

<a id="reg-n01"></a>
## REG-N01 — Required Fields Validation  
**Priority:** P0 – Critical  

**Goal:** User is guided when mandatory fields are empty  

**Checks:**
- Required validation shown
- Submit disabled

**Reason:** Fundamental form integrity.

---

<a id="reg-n02"></a>
## REG-N02 — Consent Required  
**Priority:** P0 – Critical  

**Goal:** User must accept Terms & Privacy  

**Checks:**
- Submit disabled if unchecked
- Enabled after checking consent

**Reason:** Legal compliance requirement.

---

<a id="reg-n03"></a>
## REG-N03 — Email Format Validation  
**Priority:** P0 – Critical  

**Goal:** Prevent invalid email submission  

**Checks:**
- Email validation error shown
- Submit disabled

**Reason:** Core identity validation.

---

<a id="reg-n04"></a>
## REG-N04 — Phone Number Validation  
**Priority:** P0 – Critical  

**Goal:** Phone fields accept numeric values only  

**Checks:**
- Validation error for alphabetic/special chars
- Submit disabled

**Reason:** Currently broken; core identity field.

---

<a id="reg-n05"></a>
## REG-N05 — Password Format Validation  
**Priority:** P0 – Critical  

**Goal:** Password respects format rules  

**Data:**
- < 6 chars
- Leading space
- Trailing space  

**Checks:**
- Format error displayed
- Submit disabled

**Reason:** Security requirement.

---

<a id="reg-n06"></a>
## REG-N06 — Submit Button Gating  
**Priority:** P0 – Critical  

**Goal:** Submit enabled only when all validation passes  

**Checks:**
- Disabled with any invalid/missing field
- Enabled only when all inputs + consent valid

**Reason:** Currently broken; directly blocks onboarding.

---

<a id="reg-n07"></a>
## REG-N07 — Password Strength Evaluation  
**Priority:** P1 – High  

**Goal:** Password strength reflects entered value  

**Checks:**
- Strength label updates correctly
- Color bar matches strength

**Reason:** Security signaling; currently misleading.

---

<a id="reg-n08"></a>
## REG-N08 — Field Length Boundaries  
**Priority:** P1 – High  

**Goal:** Inputs enforce reasonable limits  

**Checks:**
- Excessively long values restricted or validated

**Reason:** Prevents abuse and edge-case failures.

---

<a id="reg-n09"></a>
## REG-N09 — Error Message Consistency  
**Priority:** P1 – High  

**Goal:** Validation errors appear consistently  

**Checks:**
- Field visually marked error
- Error message near field
- Submit remains disabled

**Reason:** UX clarity and reduced abandonment.

---

# Priority Summary

## P0 – Critical (Release Blockers)
- REG-P01
- REG-P02
- REG-P03
- REG-N01
- REG-N02
- REG-N03
- REG-N04
- REG-N05
- REG-N06

## P1 – High
- REG-P04
- REG-P05
- REG-P06
- REG-N07
- REG-N08
- REG-N09

## P2 – Nice to Have
- REG-P07
