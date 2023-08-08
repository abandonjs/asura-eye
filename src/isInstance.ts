/**
 * 
 * @param value 
 * @param InStance 
 * @returns 
 */
export function isInstance(value: any, InStance: any) {
	if (!value) return false
	if (!value.__proto__) return false
	if (!InStance.prototype) return false


	while (value) {
		if (value.__proto__ === InStance.prototype) return true
		else value = value.__proto__
	}

	return false
}