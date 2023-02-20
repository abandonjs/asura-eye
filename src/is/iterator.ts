import { isEmpty } from "./empty"

/**
 * @title isIterator
 * @description 判断是否为iterator
 * @param value {unknown}
 * @returns {boolean}
 */
export function isIterator(value: unknown): value is IterableIterator<unknown> {
	if (typeof value !== 'object' || isEmpty(value)) return false
	return /Iterator\]$/.test((value as Record<string, unknown>).toString())
}

/**
 * @title isArrayIterator
 * @description 判断是否为 Array Iterator
 * @param value {unknown}
 * @returns {boolean}
 */
export function isArrayIterator(value: unknown): value is IterableIterator<[number, unknown]> {
	if (typeof value !== 'object' || isEmpty(value)) return false
	return (value as Record<string, unknown>).toString() === '[object Array Iterator]'
}

/**
 * @title isMapIterator
 * @description 判断是否为 Map Iterator
 * @param value {unknown}
 * @returns {boolean}
 */
export function isMapIterator(value: unknown): value is IterableIterator<[unknown, unknown]> {
	if (typeof value !== 'object' || isEmpty(value)) return false
	return (value as Record<string, unknown>).toString() === '[object Map Iterator]'
}

/**
 * @title isSetIterator
 * @description 判断是否为 Set Iterator
 * @param value {unknown}
 * @returns {boolean}
 */
export function isSetIterator(value: unknown): value is IterableIterator<[unknown, unknown]> {
	if (typeof value !== 'object' || isEmpty(value)) return false
	return (value as Record<string, unknown>).toString() === '[object Set Iterator]'
}