import { describe, expect, it, test } from 'vitest'
import { _ } from '../src/_.util'

const data = {
  _null: null,
  _undefined: undefined,
  _emptyString: '',
  _spaceString: ' ',
  _string: 'abcd',
  _stringNumber: '1234',
  _number: 1234,
  _float: 1234.12,
  _fn: () => {},
  _bool: true,
  _nan: NaN,
  _array: [1, 2, 3],
  _arrayEmpty: [],
  _object: { a: 1, b: 2, c: 3 },
  _objectEmpty: {},
}

describe.concurrent('util', () => {
  test('null', () => {
    expect(_.isNull(data._null)).toBe(true)
    expect(_.isNull(undefined)).toBe(false)
  })

  test('indefined', () => {
    expect(_.isUndefined(null)).toBe(false)
    expect(_.isUndefined(undefined)).toBe(true)
  })

  test('empty', () => {
    expect(_.isEmpty(data._nan)).toBe(true)
    expect(_.isEmpty(data._number)).toBe(false)
    expect(_.isEmpty(data._arrayEmpty)).toBe(true)
    expect(_.isEmpty(data._objectEmpty)).toBe(true)
  })

  test('nan', () => {
    expect(_.isNan(data._nan)).toBe(true)
    expect(_.isNan(data._number)).toBe(false)
    expect(_.isNan(data._stringNumber)).toBe(false)
  })
})
