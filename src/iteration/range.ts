export function range(min: number, max?: number) {
  if (max === undefined) {
    max = min
    min = 0
  }

  const length = max - min
  const result = Array.from({ length })

  for (let index = 0; index < length; index++) {
    result[index] = index + min
  }

  return result
}
