import { isEmpty, isUndefined } from './empty'
import { type } from './type'

/**
 * @title isMap
 * @param {unknown} value
 * @returns {boolean}
 */
export function isMap<Key = unknown, Value = unknown>(value: unknown): value is Map<Key, Value> {
	return type(value) === 'Map'
}

/**
 * @title isEmptyMap
 * @description 是空Map
 * @param {unknown} value
 * @returns {boolean}
 */
export function isEmptyMap(value: unknown): value is Map<unknown, never> {
	if (isEmpty(value)) return false
	return isMap(value) && isUndefined(value.keys().next().value)
}

/**
 * @title isEffectMap
 * @description 是有效Map
 * @param {unknown} value
 * @returns {boolean}
 */
export function isEffectMap<Key = unknown, Value = unknown>(value: unknown): value is Map<Key, Value> {
	if (isEmpty(value)) return false
	return isMap(value) && !isEmpty(value.keys().next().value)
}