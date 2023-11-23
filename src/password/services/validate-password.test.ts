import { validatePassword } from './validate-password';

describe('validatePassword function', () => {
  describe('should return false if password is invalid', () => {
    it('when it is less than 9 characters', () => {
      expect(validatePassword('Ab1_1234')).toBe(false);
    });

    it('when it does not contain a lowercase letter', () => {
      expect(validatePassword('AB1_12345')).toBe(false);
    });

    it('when it does not contain an uppercase letter', () => {
      expect(validatePassword('ab1_12345')).toBe(false);
    });

    it('when it does not contain a number', () => {
      expect(validatePassword('Abcdegfh_')).toBe(false);
    });

    it('when it does not contain an underscore', () => {
      expect(validatePassword('Abcdegfh1')).toBe(false);
    });

    it('when it contains the username', () => {
      expect(validatePassword('JohnDoe_1', 'JohnDoe')).toBe(false);
    });
  });

  it('should return true if password is valid', () => {
    expect(validatePassword('Ab1_12345', 'JohnDoe')).toBe(true);
  });
});
