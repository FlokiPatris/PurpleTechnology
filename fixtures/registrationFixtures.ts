import { test as base, expect } from '@playwright/test';
import { RegistrationPage } from 'pages/RegistrationPage';
import { DEFAULT_INDIVIDUAL_USER } from 'constants/users';

type Fixtures = {
  registration: RegistrationPage;
  individualregistration: RegistrationPage;
  corporateRegistration: RegistrationPage;
  individualRegistrationFilledWithConsent: RegistrationPage;
  languageIndividualRegistration: RegistrationPage;
  submitButtonGating: RegistrationPage;
};

export const test = base.extend<Fixtures>({
  registration: async ({ page }, use) => {
    const registration = new RegistrationPage(page);
    await registration.goto();

    await use(registration);
  },

  individualregistration: async ({ registration }, use) => {
    await registration.clickIndividualTab();
    await registration.expectIndividualFormReady();

    await use(registration);
  },

  corporateRegistration: async ({ registration }, use) => {
    await registration.clickCorporateTab();
    await registration.expectCorporateButtonsVisible();
    
    await use(registration);
  },

  languageIndividualRegistration: async ({ registration }, use) => {
    await registration.expectLanguageSelectorBaseline();

    await use(registration);
  },

  individualRegistrationFilledWithConsent: async ({ individualregistration }, use) => {
    await individualregistration.fillFormSetConsent(DEFAULT_INDIVIDUAL_USER);

    await use(individualregistration);
  },

  submitButtonGating: async ({ individualregistration }, use) => {
    await individualregistration.expectSubmitState('enabled');
    
    await use(individualregistration);
  },
});

export { expect };
