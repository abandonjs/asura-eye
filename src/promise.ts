import { type } from './type'

/**
 * @title isPromise
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return type(value) === 'Promise'
}
