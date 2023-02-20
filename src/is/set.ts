import { type } from './type'

export const isSet = (val: unknown): val is Set<any> => type(val) === 'Set'
