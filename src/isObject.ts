import { isEmpty } from "./empty"
import { type } from "./type"

/**
 * @title isObject
 * @description 是Object
 * @param {unknown} value
 * @returns {boolean}
 */
export function isObject<Value = unknown>(value: unknown): value is Record<string, Value> {
	return value !== null && typeof value === 'object' && type(value) === 'Object'
}

/**
 * @title isEmptyObject
 * @description 是空Object
 * @param {unknown} value
 * @returns {boolean}
 */
export function isEmptyObject(value: unknown): value is Record<string, never> {
	if (isEmpty(value)) return false
	return isObject(value) && Reflect.ownKeys(value).length === 0
}


/**
 * @title isEffectObject
 * @description 是有效Object(非空)
 * @param {unknown} value
 * @returns {boolean}
 */
export function isEffectObject<Value = unknown>(value: unknown): value is Record<string, Value> {
	if (isEmpty(value)) return false
	return isObject(value) && Reflect.ownKeys(value).length !== 0
}