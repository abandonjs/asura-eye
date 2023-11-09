import { isEmpty } from "./empty"

/**
 * @title isArray
 * @description 是数组
 * @param value {unknown}
 * @returns {boolean}
 */
export function isArray<T = any>(list: unknown): list is T[] {
	return Array.isArray(list)
}
// export const isArray = Array.isArray

/**
 * @title isEmptyArray
 * @description 是空数组
 * @param list {unknown}
 * @returns {boolean}
 */
export function isEmptyArray(list: unknown): list is [] {
	if (isEmpty(list)) return false
	return isArray(list) && list.length === 0
}

/**
 * @title isEffectArray
 * @description 是有效数组
 * @param list {unknown}
 * @returns {boolean}
 */
export function isEffectArray<T = unknown>(list: unknown): list is T[] {
	if (isEmpty(list)) return false
	return isArray(list) && list.length > 0
}