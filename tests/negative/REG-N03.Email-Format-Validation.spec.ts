import { test } from 'fixtures/registrationFixtures';

type EmailToastType = 'invalidEmail' | 'maxLength';

const cases: { name: string; email: string; expected: EmailToastType }[] = [
  { name: 'invalid email', email: 'test', expected: 'invalidEmail' },
  { name: 'over max length', email: '444444444444444444444444444444444444444444@c.cz', expected: 'maxLength' },
];

for (const c of cases) {
  test(`REG-N03 — Email Format Validation (${c.name})`, async ({ individualregistration: registration }) => {
    // Act
    await registration.fillEmailAndBlur(c.email);

    // Assert
    await registration.expectEmailToast(c.expected);
  });
}
