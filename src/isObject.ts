import { isEmpty } from "./empty"
import { type } from "./type"

/**
 * @title isObject
 * @description 是Object
 * @param value {unknown}
 * @returns {boolean}
 */
export function isObject(value: unknown): value is Record<string, unknown> {
	return value !== null && typeof value === 'object' && type(value) === 'Object'
}

/**
 * @title isEmptyObject
 * @description 是空Object
 * @param value {unknown}
 * @returns {boolean}
 */
export function isEmptyObject(value: unknown): value is unknown {
	if (isEmpty(value)) return false
	return isObject(value) && Reflect.ownKeys(value).length === 0
}


/**
 * @title isEffectObject
 * @description 是有效Object(非空)
 * @param value {unknown}
 * @returns {boolean}
 */
export function isEffectObject(value: unknown): value is Record<string, unknown> {
	if (isEmpty(value)) return false
	return isObject(value) && Reflect.ownKeys(value).length !== 0
}
