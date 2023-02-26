import { isEmpty, isUndefined } from './empty'
import { type } from './type'

/**
 * @title isMap
 * @param value {unknown}
 * @returns {boolean}
 */
export function isMap<T = unknown>(value: unknown): value is Map<string, T> {
	return type(value) === 'Map'
}

/**
 * @title isEmptyMap
 * @description 是空Map
 * @param value {unknown}
 * @returns {boolean}
 */
export function isEmptyMap(value: unknown): value is Map<string, never> {
	if (isEmpty(value)) return false
	return isMap(value) && isUndefined(value.keys().next().value)
}

/**
 * @title isEffectMap
 * @description 是有效Map
 * @param value {unknown}
 * @returns {boolean}
 */
export function isEffectMap<Value = unknown>(value: unknown): value is Map<string, Value> {
	if (isEmpty(value)) return false
	return isMap(value) && !isEmpty(value.keys().next().value)
}