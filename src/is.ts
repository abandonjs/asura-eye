import { type as ty } from './type'
import { isArray } from "./isArray"
import { isString } from './isString'
import { isObject } from './isObject'

export type ISTYPE = 'Array' | 'Object' | 'Function' | 'AsyncFunction' | 'GeneratorFunction' | 'String' | 'Number' | 'NaN' | 'RegExp' | 'Date' | 'Undefined' | string

export function IS(type: ISTYPE | ISTYPE[] | Record<string, ISTYPE | ISTYPE[]>) {
	if (isString(type)) {

		type = type.replace(/ |\n|\t/gi, '')

		// object string
		if (/^{(.+)}$/.test(type)) {
			const typeObject = JSON.parse(type.replace(/(\w+)/gi, `"$&"`))
			return (value: unknown): boolean => {
				if (!isObject(value)) return false
				if (Object.keys(value).length !== Object.keys(typeObject).length) return false
				for (const key in typeObject) {
					if (
						ty(value[key]) !== typeObject[key]
						&& !IS(typeObject[key])(value[key])
					) {
						return false
					}
				}
				return true
			}
		}

		// array string
		if (/^\[(.+)\]$/.test(type)) {
			const [, newType] = /\[(.+)\]$/.exec(type) || [undefined, undefined]
			const newTypes = isString(newType) ? newType.split(',') : []
			return (value: unknown): boolean => {
				if (!isArray(value)) return false
				if (newTypes.length !== value.length) return false
				for (let i = 0; i < value.length; i++)
					if (ty(value[i]) !== newTypes[i]) return false
				return true
			}
		}


		// type array
		if (/\[\]$/.test(type)) {
			const [, newType] = /(.+)\[\]$/.exec(type) || [undefined, undefined]

			return (value: unknown): boolean => {
				if (!isArray(value)) return false
				for (let i = 0; i < value.length; i++)
					if (
						ty(value[i]) !== newType
						&& !IS(newType as string)(value[i])
					){
						return false
					} 

				return true
			}
		}

		// mult type
		if (type.indexOf('|') > -1) {
			const newTypes = type.split('|')
			return (value: unknown): boolean => {
				return newTypes.includes((ty(value)))
			}
		}

	}

	if (isObject(type)) {
		return (value: unknown): boolean => {
			if (!isObject(value)) return false
			for (const key in type as Record<string, unknown>) {
				if (
					ty(value[key]) !== type[key]
					&& !IS(type[key])(value[key])
				) {
					return false
				}
			}
			return true
		}
	}

	if (isArray(type)) {
		return (value: unknown): boolean => {
			if (!isArray(value) || value.length !== type.length) return false
			for (let i = 0; i < value.length; i++) {
				if (
					ty(value[i]) !== type[i]
					&& !IS(type[i])(value[i])
				) {
					return false
				}
			}
			return true
		}
	}


	return (value: unknown): boolean => {
		return type === ty(value)
	}
}