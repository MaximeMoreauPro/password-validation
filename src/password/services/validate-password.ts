import { config } from '../config';
import { AVAILABLE_PASSWORD_RULE_VALIDATORS } from './password-rule-validators';

export function validatePassword(password: string, ...args: any): boolean {
  return config.passwordValidation.rules.every(rule =>
    AVAILABLE_PASSWORD_RULE_VALIDATORS[rule](password, args),
  );
}
