import { isEmpty } from "./empty"
import { type } from "./type"
import { ObjectType } from '0type'

/**
 * @title isObject
 * @description 是Object
 * @param {any} value
 * @returns {boolean}
 */
export function isObject<Value = ObjectType>(value: any): value is Value {
	return value !== null && typeof value === 'object' && type(value) === 'Object'
}

/**
 * @title isEmptyObject
 * @description 是空Object
 * @param {any} value
 * @returns {boolean}
 */
export function isEmptyObject(value: any): value is Record<string, never> {
	if (isEmpty(value)) return false
	return isObject(value) && Reflect.ownKeys(value).length === 0
}


/**
 * @title isEffectObject
 * @description 是有效Object(非空)
 * @param {any} value
 * @returns {boolean}
 */
export function isEffectObject<Value = ObjectType>(value: any): value is Value {
	if (isEmpty(value)) return false
	return isObject(value) && Reflect.ownKeys(value).length !== 0
}