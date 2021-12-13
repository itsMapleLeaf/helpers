export type Dict<T, K extends string | number | symbol = string> = {
  [_ in K]?: T
}

export type ValueOf<T> = T extends ReadonlyArray<infer V> ? V : T[keyof T]

export type StringAutocompleteHack = string & { __autocompleteHack?: never }

export type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T

export type Falsy = false | 0 | "" | null | undefined
