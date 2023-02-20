/**
 * @title isEmpty
 * @description 判断是否为无效值 undefined , null, NaN
 * @param value {unknown} 待判断值
 * @returns boolean
 */
export function isEmpty(value: unknown): value is (undefined | null) {
	return value === undefined || value === null || value !== value
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