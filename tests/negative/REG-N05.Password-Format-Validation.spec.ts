import { test } from 'fixtures/registrationFixtures';

const cases = [
  { name: 'too short', value: '123' },
  { name: 'leading space', value: ' 123456' },
  { name: 'trailing space', value: '123456 ' },
];

for (const c of cases) {
  test(`REG-N05 — Password Format Validation (${c.name})`, async ({ individualregistration: registration }) => {
    // Act
    await registration.fillPasswordAndBlur(c.value);

    // Assert
    await registration.expectPasswordInvalidFormatError();
  });
}
