export const concatUniq = <T>(value: T) => (items: Iterable<T>) => [
  ...items,
  value,
]
