import {
  createFixture,
  Fixture,
} from './PasswordValidation.feature.test-fixture';

describe('Password Validation feature: indicate if the password provided is valid or not', () => {
  let fixture: Fixture;

  beforeEach(() => {
    fixture = createFixture();
  });

  describe('should indicate if the password is invalid', () => {
    it('when it is less than 9 characters', () => {
      fixture.whenUserProvidesPassword('Ab1_1234');
      fixture.thenPasswordShouldBeInvalid();
    });

    it('when it does not contain a lowercase letter', () => {
      fixture.whenUserProvidesPassword('AB1_12345');
      fixture.thenPasswordShouldBeInvalid();
    });

    it('when it does not contain an uppercase letter', () => {
      fixture.whenUserProvidesPassword('ab1_12345');
      fixture.thenPasswordShouldBeInvalid();
    });

    it('when it does not contain a number', () => {
      fixture.whenUserProvidesPassword('Abcdegfh_');
      fixture.thenPasswordShouldBeInvalid();
    });

    it('when it does not contain an underscore', () => {
      fixture.whenUserProvidesPassword('Abcdegfh1');
      fixture.thenPasswordShouldBeInvalid();
    });
  });

  it('should indicate if the password is valide', () => {
    fixture.whenUserProvidesPassword('Ab1_12345');
    fixture.thenPasswordShouldBeValid();
  });
});
