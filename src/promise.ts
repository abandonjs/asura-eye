import { type } from "./type"


/**
 * @title isPromise
 * @param value {unknown}
 * @returns {boolean}
 */
export const isPromise = (value: unknown): value is Promise<unknown> => {
  return type(value) === 'Promise'
}