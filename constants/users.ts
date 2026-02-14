import { RegistrationFormData } from '../pages/RegistrationPage';

export const DEFAULT_INDIVIDUAL_USER: RegistrationFormData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  country: 'Czech Republic',
  dialCode: '+420',
  phoneNumber: '732665432',
  password: 'StrongPass123!@#$',
  acceptTerms: true,
};

export const SECOND_USER: RegistrationFormData = {
  ...DEFAULT_INDIVIDUAL_USER,
  email: 'jane.doe@example.com',
  firstName: 'Jane',
};

export const PASSWORD_VISIBILITY_TEST_VALUE = 'Secret123!';
