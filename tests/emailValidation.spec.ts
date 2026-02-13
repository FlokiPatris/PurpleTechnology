import { test } from '../fixtures/registrationFixtures';
import type { EmailToastType } from '../pages/RegistrationPage';

type EmailCase = {
  name: string;
  email: string;
  expectedToast: EmailToastType;
};

// Does the test cases make sense?
const cases: EmailCase[] = [
  { name: 'trailing dot domain', email: 'test@test.', expectedToast: 'invalidEmail' },
  { name: 'string only', email: 'test', expectedToast: 'invalidEmail' },
  { name: 'numeric only', email: '4444', expectedToast: 'invalidEmail' },
  { name: 'exceeds max length', email: '444444444444444444444444444444444444444444@c.cz', expectedToast: 'maxLength', },
];

for (const c of cases) {
  test(`email validation toast: ${c.name}`, async ({ registration }) => {
    // Act
    await registration.fillEmailAndBlur(c.email);

    // Assert
    await registration.verifyEmailToast(c.expectedToast);
  });
}