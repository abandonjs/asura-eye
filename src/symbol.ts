/**
 * @title isSymbol
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSymbol(value: unknown): value is symbol {
	return typeof value === 'symbol'
}