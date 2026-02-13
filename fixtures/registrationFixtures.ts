import { test as base } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';

type Fixtures = {
  registration: RegistrationPage;
};

export const test = base.extend<Fixtures>({
  registration: async ({ page }, use) => {
    const registration = new RegistrationPage(page);
    await registration.goto();
    await use(registration);
  },
});

export { expect } from '@playwright/test';
