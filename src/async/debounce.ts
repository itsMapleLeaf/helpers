export function debounce<A extends unknown[]>(
  time: number,
  callback: (...args: A) => void,
) {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: A) => {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      callback(...args)
    }, time)
  }
}
