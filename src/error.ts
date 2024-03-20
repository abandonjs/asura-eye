import { type } from './type'

/**
 * @title isError
 * @param {unknown} value
 * @returns {boolean}
 */
export function isError(value: unknown): value is Error {
  return type(value) === 'Error' || value instanceof Error
}
