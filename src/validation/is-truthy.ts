import { Falsy } from "../types.js"

type IsTruthy = <T>(value: T | Falsy) => value is T
export const isTruthy = Boolean as unknown as IsTruthy
