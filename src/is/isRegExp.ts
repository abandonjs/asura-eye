import { type } from './type'

/**
 * @title isRegExp 
 * @description 判断是否为正则表达式
 * @param value {unknown}
 * @returns {boolean}
 */
export function isRegExp(value: unknown): value is RegExp {
	return type(value) === 'RegExp'
}