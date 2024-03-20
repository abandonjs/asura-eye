import { isObject } from './isObject'

/**
 * @title isString
 * @description 是字符串
 * @param {unknown} value
 * @returns {boolean}
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * @title isJsonString<T>
 * @description 是json字符串, 若是并返回处理后的对象
 * @param {unknown} val 待判断字符串
 * @returns {boolean}
 */
export function isJsonString<T extends Record<string, unknown>>(
  val: unknown
): val is T {
  if (!isString(val)) return false
  try {
    return isObject<T>(JSON.parse(val))
  } catch (e) {
    return false
  }
}
