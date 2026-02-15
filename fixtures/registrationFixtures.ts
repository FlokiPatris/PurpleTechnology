import { test as base } from '@playwright/test';
import { RegistrationPage } from 'pages/RegistrationPage';
import { DEFAULT_INDIVIDUAL_USER } from 'constants/users';

type Fixtures = {
  individualregistration: RegistrationPage;
  corporateRegistration: RegistrationPage;
  individualRegistrationFilledWithConsent: RegistrationPage;
  languageIndividualRegistration: RegistrationPage;
  submitButtonGating: RegistrationPage;
};

export const test = base.extend<Fixtures>({
  individualregistration: async ({ page }, use) => {
    const registration = new RegistrationPage(page);

    await registration.goto();
    await registration.clickIndividualTab();
    await registration.expectIndividualFormReady();

    await use(registration);
  },

  corporateRegistration: async ({ page }, use) => {
    const registration = new RegistrationPage(page);

    await registration.goto();
    await registration.clickCorporateTab();
    await registration.expectCorporateButtonsVisible();

    await use(registration);
  },

  individualRegistrationFilledWithConsent: async ({ individualregistration }, use) => {
    await individualregistration.fillFormSetConsent(DEFAULT_INDIVIDUAL_USER);

    await use(individualregistration);
  },

  languageIndividualRegistration: async ({ individualregistration }, use) => {
    await individualregistration.expectLanguageSelectorBaseline();

    await use(individualregistration);
  },

  submitButtonGating: async ({ individualregistration }, use) => {
    await individualregistration.expectSubmitState('enabled');

    await use(individualregistration);
  },
});

export { expect } from '@playwright/test';
