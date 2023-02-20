/**
 * @title isSymbol
 * @param value {unknown}
 * @returns {boolean}
 */
export function isSymbol(value: unknown): value is symbol {
	return typeof value === 'symbol'
}