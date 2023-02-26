import { type } from './type'

export function isSet<T = unknown>(value: unknown): value is Set<T> {
	return type(value) === 'Set'
}

export function isEmptySet(value: unknown): value is Set<never> {
	return isSet(value) && value.size === 0
}


export function isEffectSet<T = unknown>(value: unknown): value is Set<T> {
	return isSet(value) && value.size > 0
}