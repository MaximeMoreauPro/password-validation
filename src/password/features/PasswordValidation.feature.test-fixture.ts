import { validatePassword } from '../services/validate-password';

export type Fixture = ReturnType<typeof createFixture>;

export function createFixture() {
  let passwordValidationResult: boolean;
  return {
    whenUserProvidesPassword: (providedPassword: string) => {
      passwordValidationResult = validatePassword(providedPassword);
    },
    thenPasswordShouldBeValid: () => {
      expect(passwordValidationResult).toBe(true);
    },
    thenPasswordShouldBeInvalid: () => {
      expect(passwordValidationResult).toBe(false);
    },
  };
}
