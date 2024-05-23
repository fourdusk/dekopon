import type { BaseRecord } from '#/index'

export const isType = (val: unknown, type: string): boolean => {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}

export const isUndefined = <T>(val: T): val is T => {
  return val === undefined
}

export const isNull = (val: unknown): val is null => {
  return val === null
}

export const isNullOrUndefined = (val: unknown): val is null | undefined => {
  return isNull(val) || isUndefined(val)
}

export const isNumber = (val: unknown): val is number => {
  return isType(val, 'Number') && Number.isFinite(val) && !Number.isNaN(val)
}

export const isString = (val: unknown): val is string => {
  return isType(val, 'String')
}

export const isBoolean = (val: unknown): val is boolean => {
  return isType(val, 'Boolean')
}

export const isObject = (val: unknown): val is BaseRecord => {
  return isType(val, 'Object')
}

export const isSymbol = (val: unknown): val is symbol => {
  return isType(val, 'Symbol')
}

export const isSet = (val: unknown): val is Set<unknown> => {
  return isType(val, 'Set')
}

export const isWeakSet = (val: unknown): val is WeakSet<BaseRecord> => {
  return isType(val, 'WeakSet')
}

export const isMap = (val: unknown): val is Map<unknown, unknown> => {
  return isType(val, 'Map')
}

export const isWeakMap = (
  val: unknown
): val is WeakMap<BaseRecord, unknown> => {
  return isType(val, 'WeakMap')
}

export const isArray = (val: unknown): val is unknown[] => {
  return isType(val, 'Array')
}

export const isFunction = <T>(val: unknown): val is T => {
  return isType(val, 'Function')
}

export const isDate = (val: unknown): val is Date => {
  return isType(val, 'Date')
}

export const isEmpty = (val: unknown): val is null | undefined | string => {
  return isNullOrUndefined(val) || (isString(val) && val.trim() === '')
}

export const isStrictEmpty = (
  val: unknown
): val is null | undefined | unknown[] | string => {
  return isEmpty(val) || (isArray(val) && val.length === 0)
}

export const isPromise = <T>(val: unknown): val is Promise<T> => {
  return isType(val, 'Promise')
}

export const isAsyncFunction = <T>(val: unknown): val is Promise<T> => {
  return isType(val, 'AsyncFunction')
}

export const isBrowser = (): boolean => {
  return isUndefined(window)
}
