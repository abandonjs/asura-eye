import { isNumber } from './isNumber'
import { isEmpty } from './empty'

/**
 * @title isArray
 * @description 是数组
 * @param {unknown} list
 * @returns {boolean}
 */
export function isArray<T = any>(list: unknown): list is T[] {
  return Array.isArray(list)
}

// export const isArray = Array.isArray
/**
 * @title isNumberArray
 * @description 是数字数组
 * @param {unknown} list
 * @returns {boolean}
 */
export function isNumberArray(list: unknown): list is number[] {
  if (!isArray<number>(list)) {
    return false
  }
  for (let i = 0; i < list.length; i++) {
    if (isNumber(list[i])) {
      continue
    }
    return false
  }
  return true
}

/**
 * @title isEmptyArray
 * @description 是空数组
 * @param {unknown} list
 * @returns {boolean}
 */
export function isEmptyArray(list: unknown): list is [] {
  if (isEmpty(list)) return false
  return isArray(list) && list.length === 0
}

/**
 * @title isEffectArray
 * @description 是有效数组
 * @param {unknown} list
 * @returns {boolean}
 */
export function isEffectArray<T = unknown>(list: unknown): list is T[] {
  if (isEmpty(list)) return false
  return isArray(list) && list.length > 0
}
