export function without<T>(items: readonly T[], removedValue: T) {
  return items.filter((item) => item !== removedValue)
}
