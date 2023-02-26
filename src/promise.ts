import { type } from "./type"


/**
 * @title isPromise
 * @param value {unknown}
 * @returns {boolean}
 */
export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return type(value) === 'Promise'
}