import { test as base } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { DEFAULT_INDIVIDUAL_USER } from 'constants/users';

type Fixtures = {
  individualregistration: RegistrationPage;
  corporateRegistration: RegistrationPage;
  individualRegistrationFilled: RegistrationPage;
  languageIndividualRegistration: RegistrationPage;
};

export const test = base.extend<Fixtures>({
  individualregistration: async ({ page }, use) => {
    const registration = new RegistrationPage(page);
    await registration.goto();
    await registration.expectTabsVisible();
    await registration.openIndividualTab();

    await use(registration);
  },

  corporateRegistration: async ({ page }, use) => {
    const registration = new RegistrationPage(page);
    await registration.goto();
    await registration.expectTabsVisible();
    await registration.openCorporateTab();
    await registration.expectCorporateButtonsVisible();
    
    await use(registration);
  },

  individualRegistrationFilled: async ({ page }, use) => {
    const registration = new RegistrationPage(page);
    await registration.goto();
    await registration.fillForm(DEFAULT_INDIVIDUAL_USER);

    await use(registration);
  },

  languageIndividualRegistration: async ({ individualregistration }, use) => {
    await individualregistration.expectLanguageSelectorBaseline();
  }
});

export { expect } from '@playwright/test';
