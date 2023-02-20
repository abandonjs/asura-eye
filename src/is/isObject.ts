import { type } from "./type"

/**
 * @title isObject
 * @description 判断是否为Object
 * @param value {unknown}
 * @returns {boolean}
 */
export function isObject(value: unknown): value is Record<any, any> {
	return value !== null && typeof value === 'object' && type(value) === 'Object'
}