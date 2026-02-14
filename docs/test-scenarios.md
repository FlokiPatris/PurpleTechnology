# Registration Form — Test Scenarios (Automation Ready)

Scope: Individual & Corporate Registration  
Format: Scenario-level (Playwright compatible)

---

# 🟢 Core Registration (Happy Path)

## REG-S01 — Successful Individual Registration

**Goal:** User creates an individual trading account  
**Preconditions:** Clean session, Individual tab selected  
**Data:** Valid first name, last name, email, phone, strong password  
**Checks:**  
- Submit button enabled  
- User can click “Start trading”  
- Success toast or next onboarding step appears  

---

## REG-S02 — Corporate Registration Entry Points

**Goal:** Corporate user can start onboarding  
**Preconditions:** Corporate tab  
**Checks:**  
- Open Live Corporate navigates correctly  
- Open Demo Corporate navigates correctly  

---

# 🟡 Required Fields & Consent

## REG-S03 — Required Fields Validation

**Goal:** User is guided when mandatory fields are empty  
**Preconditions:** Individual tab  
**Data:** Leave First Name, Last Name, Email empty  
**Checks:**  
- Required validation shown on all mandatory fields  
- Submit remains disabled  

---

## REG-S04 — Consent Required

**Goal:** User must accept Terms & Privacy  
**Preconditions:** Individual tab, all fields valid  
**Data:** Consent unchecked  
**Checks:**  
- Submit disabled  
- After checking consent → submit enabled  

---

# 🟠 Field Validation

## REG-S05 — Email Format Validation

**Goal:** Prevent invalid email submission  
**Preconditions:** Individual tab  
**Data:** invalid-email  
**Checks:**  
- Email field shows validation error  
- Submit disabled  

---

## REG-S06 — Phone Number Validation

**Goal:** Ensure phone fields accept numeric values only  
**Preconditions:** Individual tab  
**Data:** Alphabetic phone input  
**Checks:**  
- Validation error displayed  
- Submit disabled  

---

## REG-S07 — Password Strength Evaluation

**Goal:** Password strength correctly reflects entered value  
**Preconditions:** Individual tab  
**Data:** Weak → Medium → Strong passwords  
**Checks:**  
- Strength label updates correctly  
- Color bar matches strength  

---

## REG-S08 — Field Length Boundaries

**Goal:** Inputs enforce reasonable limits  
**Preconditions:** Individual tab  
**Data:** Extremely long name/email  
**Checks:**  
- Input restricted or validation shown  

---

# 🔵 Cross-Field / Integration Logic

## REG-S09 — Country Selection Updates Dial Code

**Goal:** Dial code reflects selected country  
**Preconditions:** Individual tab  
**Data:** Change country  
**Checks:**  
- Dial code updates automatically  

---

# 🟣 UX & Navigation

## REG-S10 — Language Selector Persistence

**Goal:** Language selection does not corrupt session  
**Preconditions:** Clean session  
**Data:** Change language  
**Checks:**  
- Page remains accessible  
- Session not broken  

---

## REG-S11 — Navigation Links

**Goal:** Supporting links work correctly  
**Preconditions:** Registration page  
**Checks:**  
- Register/Login link works  
- Marketing links load valid content  

---

End of scenarios.
