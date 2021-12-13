export const isNonNil = <T>(value: T | undefined | null): value is T =>
  value != null
