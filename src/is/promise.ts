import { type } from "./type"

export const isPromise = (value: unknown): value is Promise<any> => {
  return type(value) === 'Promise'
}