/**
 * @title isInstance
 * @param {unknown} value 
 * @param {unknown} InStance 
 * @returns {boolean}
 */
export function isInstance(value: unknown, InStance: unknown) {
	if (!value) return false
	if (!(value as any).__proto__) return false
	if (!(InStance as any).prototype) return false


	while (value) {
		if ((value as any).__proto__ === (InStance as any).prototype) return true
		else value = (value as any).__proto__
	}

	return false
}