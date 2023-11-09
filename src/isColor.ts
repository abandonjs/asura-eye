import { type } from './type'
/**
 * @title isHexColor
 * @description 是颜色字符串或数字
 * @param {string} hex 三位/六位的十六进制的颜色
 * @returns {boolean}
 */
export function isHexColor(hex: string): boolean {
	if (hex.length === 3) {
		hex += hex
	}
	return (type(hex) === 'String')
		&& hex.length === 6 && !isNaN(Number('0x' + hex))

}