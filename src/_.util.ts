export const _ = {
  isNull(value: any) {
    return !!(value === null || value === 'null')
  },

  isUndefined(value: any) {
    return !!(typeof value === 'undefined' || value === undefined || value === 'undefined')
  },

  isEmpty(value: any) {
    return (
      [Object, Array].includes((value || {}).constructor) && !Object.entries(value || {}).length
    )
  },

  isNan(value: any) {
    return !!(value === 'NaN' || isNaN(value))
  },

  // isNu(value) {
  //   return !!(this.isNull(value) || this.isUndefined(value))
  // },

  // isStr(value) {
  //   return typeof value === 'string'
  // },

  // isInt(value) {
  //   return Number.isInteger(value)
  // },

  // isBoolean(value) {
  //   return typeof value === 'boolean'
  // },

  // isObject(value) {
  //   return typeof value === 'object'
  // },

  // isFunction(value) {
  //   return typeof value === 'function'
  // },

  // isArray(value) {
  //   return !!Array.isArray(value)
  // },

  // isElement(elem) {
  //   return elem instanceof Element
  // },

  // isFile(file) {
  //   return file instanceof File
  // },

  // isFormData(value) {
  //   return value instanceof FormData
  // },

  // isDate(value) {
  //   return Object.prototype.toString.call(value) === '[object Date]'
  // },

  // isJsonString(value) {
  //   try {
  //     JSON.parse(value)
  //   } catch (e) {
  //     return false
  //   }

  //   return true
  // },

  // /**
  //  *
  //  *
  //  *
  //  *
  //  *
  //  *
  //  *
  //  */

  // keyEventMustBeNumber(event) {
  //   const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  //   const keyPressed = event.key

  //   if (!keysAllowed.includes(keyPressed)) event.preventDefault()
  // },

  // keyEventMustBeCurrencyNumber(event) {
  //   const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
  //   const keyPressed = event.key

  //   if (!keysAllowed.includes(keyPressed)) event.preventDefault()
  // },

  // /**
  //  *
  //  *
  //  *
  //  *
  //  *
  //  *
  //  *
  //  */

  // /**
  //  * let object = { a: 1, b: 'settings' };
  //  * let result = has(object, 'a');
  //  */
  // has(obj, key) {
  //   const keyParts = key.split('.')

  //   return (
  //     !!obj &&
  //     (keyParts.length > 1
  //       ? this.has(obj[key.split('.')[0]], keyParts.slice(1).join('.'))
  //       : hasOwnProperty.call(obj, key))
  //   )
  // },

  // /**
  //  * var array = [1, 2, 3]
  //  * array.indexOf(1) > -1
  //  * output: true
  //  */
  // includes(arr, value) {
  //   return arr.includes(value)
  // },

  // /**
  //  * debounce(someFunction, 150)
  //  */
  // debounce(func, wait, immediate) {
  //   let timeout

  //   return function () {
  //     const context = this
  //     const args = arguments

  //     clearTimeout(timeout)
  //     timeout = setTimeout(function () {
  //       timeout = null
  //       if (!immediate) func.apply(context, args)
  //     }, wait)
  //     if (immediate && !timeout) func.apply(context, args)
  //   }
  // },

  // /**
  //  * var object = { a: [{ b: { c: 3 } }] };
  //  * var result = get(object, 'a[0].b.c', 1);
  //  * output: 3
  //  */
  // get(obj, path, defaultValue = undefined) {
  //   const travel = (regexp) =>
  //     String.prototype.split
  //       .call(path, regexp)
  //       .filter(Boolean)
  //       .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj)
  //   const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

  //   return result === undefined || result === obj ? defaultValue : result
  // },

  // /**
  //  * var object = { 'a': 1, 'b': '2', 'c': 3 };
  //  * pick(object, ['a', 'c']);
  //  * output: {a: 1, c: 3}
  //  */
  // pick(object, keys) {
  //   return keys.reduce((obj, key) => {
  //     // eslint-disable-next-line no-prototype-builtins
  //     if (object && object.hasOwnProperty(key)) {
  //       obj[key] = object[key]
  //     }

  //     return obj
  //   }, {})
  // },

  // pushFirstArr(arr, values) {
  //   return arr.unshift(values)
  // },

  // firstArr(arr) {
  //   return arr.shift()
  // },

  // lastArr(arr) {
  //   return arr.pop()
  // },

  // upperFirst(string) {
  //   return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
  // },

  // /**
  //  *
  //  *
  //  *
  //  *
  //  *
  //  *
  //  */

  // toInt(value) {
  //   return Number.parseInt(value)
  // },

  // toStr(value) {
  //   return value.toString()
  // },

  // toFloat(value) {
  //   return Number.parseFloat(value)
  // },

  // toJsonObj(jsonString) {
  //   return JSON.parse(jsonString)
  // },

  // toJsonStr(jsonObject) {
  //   return JSON.stringify(jsonObject)
  // },

  // toJsonPretty(jsonObject, indent = 2) {
  //   return JSON.stringify(jsonObject, null, indent)
  // },

  // toCurrencyFormat(number) {
  //   number = this.toFloat(number)

  //   return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  // },

  // formatFileSize(
  //   size,
  //   units = ['byte', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'],
  //   delimiter = ' '
  // ) {
  //   const threshold = 1024

  //   size = size * threshold
  //   const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(threshold))

  //   return (size / Math.pow(threshold, i)).toFixed(2) * 1 + delimiter + units[i]
  // },

  // toBase64Image(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader()

  //     reader.readAsDataURL(file)
  //     reader.onload = () => resolve(reader.result)
  //     reader.onerror = (error) => reject(error)
  //   })
  // },

  // fakeArray(count = 5, item) {
  //   return [...new Array(count)].fill(item)
  // },

  // // https://gist.github.com/gordonbrander/2230317
  // uniqueId() {
  //   return (
  //     String.fromCharCode(Math.floor(Math.random() * 26) + 97) +
  //     Math.random().toString(16).slice(2) +
  //     Date.now().toString(16).slice(4)
  //   )
  // },

  // humanJoin(array, glue = ', ', finalGlue = ' and ') {
  //   return [array.slice(0, -1).join(glue), ...array.slice(-1)]
  //     .filter((x) => x !== '')
  //     .join(finalGlue)
  // },
}
