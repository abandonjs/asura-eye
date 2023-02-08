import { isArray } from "./isArray"

/**
 * @title type
 * @description 获取类型
 * @param param {unknown} 参数
 * @return string 类型名称
 */
export type typeResult = 'Array' | 'Object' | 'Function' | 'AsyncFunction' | 'GeneratorFunction' | 'String' | 'Number' | 'NaN' | 'RegExp' | 'Date' | 'Undefined' | string

export function type(param: unknown): typeResult {
  const result: string = Object.prototype.toString
    .call(param)
    .match(/\[object (\w+)\]/)[1]
  if (result === 'Number' && isNaN(param as number)) return 'NaN'
  return result
}

/**
 * @title types
 * @description 获取类型数组
 * @param params {unknown[]} 待判断的参数列表
 * @param hasRepeat=false 保留重复类型
 * @return string[] 类型名称
 */
export function types(params: unknown[], hasRepeat = false): typeResult[] {
  if (!isArray(params)) return []
  const result = params.map(i => type(i)) || []
  return hasRepeat ? result : [...new Set(result)]
}