import { isEmpty, isUndefined } from './empty'
import { type } from './type'

/**
 * @title isMap
 * @param value {unknown}
 * @returns {boolean}
 */
export const isMap = (value: unknown): value is Map<string, unknown> => type(value) === 'Map'

/**
 * @title isEmptyMap
 * @description 是空Map
 * @param value {unknown}
 * @returns {boolean}
 */
export function isEmptyMap(value: unknown): value is unknown {
	if (isEmpty(value)) return false
	return isMap(value) && !isUndefined(value.keys().next().value)
}

/**
 * @title isEffectMap
 * @description 是有效Map
 * @param value {unknown}
 * @returns {boolean}
 */
export function isEffectMap(value: unknown): value is Map<string, unknown> {
	if (isEmpty(value)) return false
	return isMap(value) && !isEmpty(value.keys().next().value)
}
