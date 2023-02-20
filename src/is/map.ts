import { type } from './type'

export const isMap = (val: unknown): val is Map<unknown, unknown> => type(val) === 'Map'
