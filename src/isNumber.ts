import { type } from './type'
import { INFINITY } from './constants'
import { isString } from './isString'
import { isEmpty } from './empty'
import { isArray } from './isArray'

/**
 * @title isNumber
 * @description 是数字
 * @param {unknown} value
 * @returns {boolean}
 */
export const isNumber = (value: unknown): value is number => {
	return typeof value === 'number' && type(value) === 'Number'
}

/**
 * @title isEffectNumber
 * @description 是js的有效区间的数, 非number类型都为false
 * @param {unknown} value
 * @returns {boolean}
 */
export function isEffectNumber(value: unknown): value is number {
	if (type(value) === 'Number') {
		if (value === INFINITY || value === -INFINITY) return false
		return true
	}
	return false
}

/**
 * @title isFloat
 * @description 判断数是浮点型
 * @param {unknown} value 待检测的数据类型
 * @returns {boolean}
 */
export function isFloat(value: unknown): value is number {
	if (!isNumber(value)) return false
	return (value % 1) !== 0
}

/**
 * @title isInteger
 * @description 判断数是整型
 * @param {unknown} value 待检测的数据类型
 * @returns {boolean}
 */
export function isInteger(value: unknown): value is number {
	if (!isNumber(value)) return false
	return (value % 1) === 0
}

/**
 * @title isBigInt
 * @description 是bigInt类型
 * @param {unknown} value 待检测的数据类型
 * @returns {boolean}
 */
export const isBigInt = (value: unknown): value is bigint => type(value) === 'BigInt'


/**
 * @title likeNumber
 * @description 是数字/数字字符串
 * @support: Number, NumberString
 * @unsupported: Infinity, Function
 * @param {unknown} value
 * @returns {boolean}
 * @version 0.1.0
 */
export function likeNumber(value: unknown): value is `${number}` {

	if (isNumber(value)) return true

	if (isString(value)) value = value.trim()

	if (
		isEmpty(value)
		|| isArray(value)
		|| value === ''
	) return false

	if (Number.isNaN(Number(value)) === false) {
		return true
	}

	return false
}
