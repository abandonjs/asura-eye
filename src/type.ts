import { isIterator } from "./iterator"

/**
 * @title type
 * @description 获取类型
 * @param {unknown} param 参数
 * @return {string} 类型名称
 * @lastUpdate 0.2.0
 */
export type typeResult = 'Array' | 'Object' | 'Function' | 'AsyncFunction' | 'GeneratorFunction' | 'String' | 'Number' | 'NaN' | 'RegExp' | 'Date' | 'Undefined' | string

export function type(param: unknown): typeResult {
  try {
    if (isIterator(param)) return 'Iterator'
    const result: string = Object.prototype.toString
      .call(param)
      .match(/\[object (\w+)\]/)[1]
    if (result === 'Number' && isNaN(param as number)) return 'NaN'
    return result
  } catch (error) {
    return 'Undefined'
  }
}

/**
 * @title types
 * @description 获取类型数组
 * @param {unknown[]} params 待判断的参数列表
 * @param {boolean} [hasRepeat=false] 保留重复类型
 * @return {string[]} 类型名称
 */
export function types(params: unknown[], hasRepeat: boolean = false): typeResult[] {
  if (!Array.isArray(params)) return []
  const result = params.map(i => type(i)) || []
  return hasRepeat ? result : [...new Set(result)]
}