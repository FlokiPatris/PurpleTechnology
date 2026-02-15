import { PASSWORD_VISIBILITY_TEST_VALUE } from 'constants/users';
import { test } from 'fixtures/registrationFixtures';

test('REG-P05 — Password Visibility Toggle', async ({ individualRegistrationWithPassword: registration }) => {
  // Assert default state is masked
  await registration.expectPasswordInputType('password');

  // Act: toggle visible
  await registration.togglePasswordVisibility();

  // Assert visible state keeps value unchanged
  await registration.expectPasswordInputType('text');
  await registration.expectPasswordValue(PASSWORD_VISIBILITY_TEST_VALUE);

  // Act: toggle masked
  await registration.togglePasswordVisibility();

  // Assert masked state still keeps value unchanged
  await registration.expectPasswordInputType('password');
  await registration.expectPasswordValue(PASSWORD_VISIBILITY_TEST_VALUE);
});
