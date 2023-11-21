import { PasswordValidationRule } from './enums/PasswordValidationRule';
import { PasswordRuleConfigurations } from './services/password-rule-validators';

// Helper type to validate specific configurations according to the rules provided
type PasswordValidationConfig<
  Rules extends ReadonlyArray<PasswordValidationRule>,
> = {
  rules: Rules;
} & UnionToIntersection<
  Rules[number] extends PasswordValidationRule
    ? PasswordRuleConfigurations[Rules[number]]
    : never
>;

// Helper type to convert union to intersection
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;

type Config = Readonly<{
  passwordValidation: PasswordValidationConfig<
    [
      PasswordValidationRule.MinLength,
      PasswordValidationRule.ContainsLowerCase,
      PasswordValidationRule.ContainsUpperCase,
      PasswordValidationRule.ContainsNumber,
      PasswordValidationRule.ContainsUnderscore,
      PasswordValidationRule.DoesNotContainUserName,
    ]
  >;
}>;

export const config: Config = {
  passwordValidation: {
    rules: [
      PasswordValidationRule.MinLength,
      PasswordValidationRule.ContainsLowerCase,
      PasswordValidationRule.ContainsUpperCase,
      PasswordValidationRule.ContainsNumber,
      PasswordValidationRule.ContainsUnderscore,
      PasswordValidationRule.DoesNotContainUserName,
    ],
    minLength: 8,
  },
};
