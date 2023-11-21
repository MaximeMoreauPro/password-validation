const MIN_LENGTH = 8;
const CONTAINS_LOWER_CASE = /[a-z]/;
const CONTAINS_UPPER_CASE = /[A-Z]/;
const CONTAINS_NUMBER = /[0-9]/;
const CONTAINS_UNDERSCORE = /_/;

export function validatePassword(password: string): boolean {
  const isLongEnough = password.length > MIN_LENGTH;
  const containsLowerCase = CONTAINS_LOWER_CASE.test(password);
  const containsUpperCase = CONTAINS_UPPER_CASE.test(password);
  const containsNumber = CONTAINS_NUMBER.test(password);
  const containsUnderscore = CONTAINS_UNDERSCORE.test(password);

  return (
    isLongEnough &&
    containsLowerCase &&
    containsUpperCase &&
    containsNumber &&
    containsUnderscore
  );
}
