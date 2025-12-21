export const dateToString = (value: Date | string): string =>
  value instanceof Date ? value.toISOString() : value;
