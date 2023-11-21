import { validatePassword } from '../services/validate-password';

export type Fixture = ReturnType<typeof createFixture>;

export function createFixture() {
  let userName: string;
  let passwordValidationResult: boolean;
  return {
    givenTheUserNameIs: (providedUserName: string) => {
      userName = providedUserName;
    },
    whenUserProvidesPassword: (providedPassword: string) => {
      passwordValidationResult = validatePassword(providedPassword, userName);
    },
    thenPasswordShouldBeValid: () => {
      expect(passwordValidationResult).toBe(true);
    },
    thenPasswordShouldBeInvalid: () => {
      expect(passwordValidationResult).toBe(false);
    },
  };
}
