import { isEmpty } from './empty'
import { type } from './type'

export type FunctionType = (...args: unknown[]) => unknown
export type EmptyFunctionType = () => void
export type AsyncFunctionType = (...args: unknown[]) => Promise<unknown>

/**
 * @title isFunction
 * @description 是函数
 * @param {unknown} value
 * @param {boolean} [strict=false] 严格模式
 * @returns {boolean}
 */
export function isFunction<T extends FunctionType>(value: unknown, strict = false): value is T {
  if (strict) {
    return typeof value === 'function'
  }
  return type(value) === 'Function'
}

/**
 * @title isAsyncFunction
 * @description 是异步函数
 * @param {unknown} value
 * @returns {boolean}
 */
export function isAsyncFunction<T extends AsyncFunctionType>(value: unknown): value is T {
  return type(value) === 'AsyncFunction'
}

/**
 * @title likeFunction
 * @description 是函数
 * @param {unknown} value
 * @returns {boolean}
 * @version 0.4.0
 */
export function likeFunction<T extends FunctionType | AsyncFunctionType>(value: unknown): value is T {
  return type(value) === 'Function' || type(value) === 'AsyncFunction'
}

/**
 * @title isEmptyFunction
 * @description 是空方法
 * @param {unknown} value
 * @returns {boolean}
 * @version 0.4.0
 */
export function isEmptyFunction(value: unknown): value is EmptyFunctionType {
  if (isEmpty(value)) return false
  return isFunction(value) && /\{\}$/.test(value.toString().replaceAll(' ', ''))
}

/**
 * @title isEffectFunction
 * @description 是有效方法(非空方法)
 * @param {unknown} value
 * @returns {boolean}
 * @version 0.4.0
 */
export function isEffectFunction<T = FunctionType>(value: unknown): value is T {
  if (isEmpty(value)) return false
  return isFunction(value) && /\{.+\}$/.test(value.toString().replaceAll(' ', ''))
}