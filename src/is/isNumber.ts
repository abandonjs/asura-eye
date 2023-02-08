import { type } from './type'
import { INFINITY } from '../constants'
import { isString } from './isString'
import { isEmpty } from './isUtil'
import { isArray } from './isArray'

/**
 * @title isEffectNumber
 * @description 是否为js的有效区间的数, 非number类型都为false
 * @param num
 * @returns boolean
 */
export function isEffectNumber(num: unknown): boolean {
	if (type(num) === 'Number') {
		if (num === INFINITY || num === -INFINITY) return false
		return true
	}
	return false
}

/**
 * @title isFloat
 * @description 判断数是否为浮点型
 * @param num 待检测的数据类型
 * @returns boolean
 */
export function isFloat(num: unknown): boolean {
	if(!isNumber(num)) return false
	return (num % 1) !== 0
}

/**
 * @title isNumber
 * @description 是否为数字
 * @param num 待检测的数据类型
 * @returns {boolean}
 */
export const isNumber = (val: unknown): val is number => type(val) === 'Number'

/**
 * @title isBigInt
 * @description 是否为bigInt类型
 * @param value 待检测的数据类型
 * @returns {boolean}
 */
export const isBigInt = (value: unknown): value is bigint => type(value) === 'BigInt'


/**
 * @title likeNumber
 * @description 是否为数字/数字字符串
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
		|| isNaN(Number(value))
	) return false

	if (Number.isNaN(Number(value)) === false) {
		return true
	}

	return false
}
