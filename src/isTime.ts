import { isNumber } from './isNumber'
import { isString } from './isString'
import { type } from './type'

export type Time = string | Date | number
export type TimeKey = 'year' | 'mouth' | 'day' | 'hour' | 'minute' | 'second' | 'timeStamp'

/**
 * @title isDate
 * @description 检查日期是否有效
 * @param date {any} 待判断日期
 * @returns {boolean}
 * @version 0.1.0
 */
export function isDate(date: unknown): date is Date {
	return type(date) === 'Date'
}

/**
 * @title likeDate
 * @description 检查日期是否有效, 时间戳也为有效时间(13位/10位)
 * @param date {any}
 * @returns {boolean}
 */
export function likeDate(date: unknown): date is Date {
	if (isDate(date)) return true

	if (
		(isString(date) && isNumber(Number(date)))
		|| isNumber(date)
	) {
		if (date.toString().length === 13) return true
		if (date.toString().length === 10) return true
	}
	return false
}

/**
 * @title isTime
 * @description 检查日期是否有效, 时间戳也为有效时间(13位/10位)
 * @param time:any 待判断日期
 * @returns boolean
 * @version 0.1.0
 */
export function isTime(time: unknown): boolean {
	if (isNumber(time)) {
		if (time.toString().length === 13) return true
		if (time.toString().length === 10) return true
	}
	return time instanceof Date && !isNaN(time.getTime());
}

// 该方法用于检测给出的日期是否有效：
// const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
// isDateValid("December 17, 1995 03:24:00");  // true