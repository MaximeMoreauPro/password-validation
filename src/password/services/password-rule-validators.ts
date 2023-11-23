import { PasswordValidationRule } from '../enums/PasswordValidationRule';
import { config } from '../config';

type PasswordRuleValidator = (password: string, ...args: any) => boolean;

export type PasswordRuleConfigurations = {
  [PasswordValidationRule.MinLength]: { minLength: number };
  [PasswordValidationRule.ContainsLowerCase]: {};
  [PasswordValidationRule.ContainsUpperCase]: {};
  [PasswordValidationRule.ContainsNumber]: {};
  [PasswordValidationRule.ContainsUnderscore]: {};
  [PasswordValidationRule.DoesNotContainUserName]: {};
};

const haveMinimalLengh: PasswordRuleValidator = password =>
  password.length > config.passwordValidation.minLength;

const CONTAINS_LOWER_CASE = /[a-z]/;
const containsLowerCase: PasswordRuleValidator = password =>
  CONTAINS_LOWER_CASE.test(password);

const CONTAINS_UPPER_CASE = /[A-Z]/;
const containsUpperCase: PasswordRuleValidator = password =>
  CONTAINS_UPPER_CASE.test(password);

const CONTAINS_NUMBER = /[0-9]/;
const containsNumber: PasswordRuleValidator = password =>
  CONTAINS_NUMBER.test(password);

const CONTAINS_UNDERSCORE = /_/;
const containsUnderscore: PasswordRuleValidator = password =>
  CONTAINS_UNDERSCORE.test(password);

type DoesNotContainUserNameValidator = (
  password: string,
  userName: string,
) => boolean;
const doesNotContainUserName: DoesNotContainUserNameValidator = (
  password,
  userName,
) => !password.includes(userName);

export const AVAILABLE_PASSWORD_RULE_VALIDATORS: Readonly<
  Record<PasswordValidationRule, PasswordRuleValidator>
> = {
  [PasswordValidationRule.MinLength]: haveMinimalLengh,
  [PasswordValidationRule.ContainsLowerCase]: containsLowerCase,
  [PasswordValidationRule.ContainsUpperCase]: containsUpperCase,
  [PasswordValidationRule.ContainsNumber]: containsNumber,
  [PasswordValidationRule.ContainsUnderscore]: containsUnderscore,
  [PasswordValidationRule.DoesNotContainUserName]: doesNotContainUserName,
};
