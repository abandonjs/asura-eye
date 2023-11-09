import { type } from './type'

/**
 * @title isSet
 * @param {unknown} value 
 * @returns {boolean}
 */
export function isSet<T = unknown>(value: unknown): value is Set<T> {
	return type(value) === 'Set'
}

/**
 * @title isEmptySet
 * @param {unknown} value 
 * @returns {boolean}
 */
export function isEmptySet(value: unknown): value is Set<never> {
	return isSet(value) && value.size === 0
}


/**
 * @title isEffectSet
 * @param {unknown} value 
 * @returns {boolean}
 */
export function isEffectSet<T = unknown>(value: unknown): value is Set<T> {
	return isSet(value) && value.size > 0
}