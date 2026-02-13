import { test } from '../fixtures/registrationFixtures';

test('required validation appears for first name, last name, and email', async ({ registration }) => {
  // Act
  await registration.triggerRequiredForThreeFields();

  // Assert
  await registration.verifyRequiredErrorsCount(3);
});
