import { test } from 'fixtures/registrationFixtures';

const cases = [
  { name: 'too short', value: '123' },
  { name: 'leading space', value: ' 123456' },
  { name: 'trailing space', value: '123456 ' },
];

for (const c of cases) {
  test(`REG-N05 — Password Format Validation (${c.name})`, async ({ individualregistration }) => {
    // Act
    await individualregistration.fillPasswordAndBlur(c.value);

    // Assert
    await individualregistration.expectPasswordInvalidFormatError();
  });
}
