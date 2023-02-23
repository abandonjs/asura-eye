import { isObject } from './isObject'

/**
 * @title isString
 * @description 是字符串
 * @param value {unknown}
 * @returns {boolean}
 */
export function isString(value: unknown): value is string {
	return typeof value === 'string'
}

/**
 * @title isJsonString<T>
 * @description 是json字符串, 若是并返回处理后的对象
 * @param val 待判断字符串
 * @returns T | false
 */
export function isJsonString<T extends Record<string, unknown>>(val: unknown): T | false {
	if (!isString(val)) return false
	try {
		const obj: T = JSON.parse(val)
		return isObject(obj) && obj
	} catch (e) {
		return false
	}
}