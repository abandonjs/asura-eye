/**
 * @title isEmpty
 * @description 是无效值 undefined , null, NaN
 * @param value {unknown} 待值
 * @returns boolean
 */
export function isEmpty(value: unknown): value is (undefined | null) {
	return value === undefined || value === null || value !== value
}

/**
 * @title isNoEmpty
 * @description 不是是无效值 undefined , null, NaN
 * @param value {unknown}
 * @returns boolean
 * @version 0.3.0
 */
export function isNoEmpty(value: unknown): value is (undefined | null) {
	return value !== undefined || value !== null || value === value
}

/**
 * @title isNull
 * @param value {unknown}
 * @returns boolean
 */
export function isNull(value: unknown): value is null {
	return value === null
}

/**
 * @title isUndefined
 * @param value {unknown}
 * @returns boolean
 */
export function isUndefined(value: unknown): value is undefined {
	return value === undefined
}

/**
 * @title isNaN
 * @param value {unknown}
 * @returns boolean
 */
export const isNaN = Number.isNaN