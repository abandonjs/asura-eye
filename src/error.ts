import { type } from "./type";

/**
 * @title isError
 * @param value {unknown}
 * @returns {boolean}
 */
export function isError(value: unknown): value is Error{
	return type(value) === 'Error' || value instanceof Error
}