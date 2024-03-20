import { isEmpty } from './empty'

/**
 * @title isIterator
 * @description 是iterator
 * @param {unknown} value
 * @returns {boolean}
 */
export function isIterator(value: unknown): value is IterableIterator<unknown> {
  if (typeof value !== 'object' || isEmpty(value)) return false
  return /Iterator\]$/.test((value as Record<string, unknown>).toString())
}

/**
 * @title isArrayIterator
 * @description 是 Array Iterator
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArrayIterator(
  value: unknown
): value is IterableIterator<[number, unknown]> {
  if (typeof value !== 'object' || isEmpty(value)) return false
  return (
    (value as Record<string, unknown>).toString() === '[object Array Iterator]'
  )
}

/**
 * @title isMapIterator
 * @description 是 Map Iterator
 * @param {unknown} value
 * @returns {boolean}
 */
export function isMapIterator(
  value: unknown
): value is IterableIterator<[unknown, unknown]> {
  if (typeof value !== 'object' || isEmpty(value)) return false
  return (
    (value as Record<string, unknown>).toString() === '[object Map Iterator]'
  )
}

/**
 * @title isSetIterator
 * @description 是 Set Iterator
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSetIterator(
  value: unknown
): value is IterableIterator<[unknown, unknown]> {
  if (typeof value !== 'object' || isEmpty(value)) return false
  return (
    (value as Record<string, unknown>).toString() === '[object Set Iterator]'
  )
}
