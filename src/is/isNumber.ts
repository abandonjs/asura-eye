import { type } from './type'
import { INFINITY } from '../constants'
import { isString } from './isString'
import { isEmpty } from './empty'
import { isArray } from './isArray'

/**
 * @title isNumber
 * @description 是数字
 * @param value {unknown}
 * @returns {boolean}
 */
export const isNumber = (value: unknown): value is number => {
	return typeof value === 'number' && type(value) === 'Number'
}

/**
 * @title isEffectNumber
 * @description 是js的有效区间的数, 非number类型都为false
 * @param value {unknown}
 * @returns boolean
 */
export function isEffectNumber(value: unknown): boolean {
	if (type(value) === 'Number') {
		if (value === INFINITY || value === -INFINITY) return false
		return true
	}
	return false
}

/**
 * @title isFloat
 * @description 判断数是浮点型
 * @param num 待检测的数据类型
 * @returns boolean
 */
export function isFloat(num: unknown): boolean {
	if (!isNumber(num)) return false
	return (num % 1) !== 0
}

/**
 * @title isBigInt
 * @description 是bigInt类型
 * @param value 待检测的数据类型
 * @returns {boolean}
 */
export const isBigInt = (value: unknown): value is bigint => type(value) === 'BigInt'


/**
 * @title likeNumber
 * @description 是数字/数字字符串
 * @support: Number, NumberString
 * @unsupported: Infinity, Function
 * @param value any
 * @returns boolean
 * @version 0.1.0
 */
export function likeNumber(value: unknown): boolean {

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
