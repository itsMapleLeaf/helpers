import { useEffect, useRef } from "react"

/**
 * Use this when you want to read a value in useEffect/useCallback
 * without it being a dependency
 */
export function useLatestRef<T>(value: T): { readonly current: T } {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  })
  return ref
}
