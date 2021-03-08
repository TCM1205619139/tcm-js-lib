/**
 * Cookie is a single instance, use Cookie.getInstance to create a new instance or get a exist instance
 */
class Cookie {
  static instance

  constructor(cookie) {
    if (Window) this.instance = cookie

    return undefined
  }

  static getInstance() {
    try {
      if (!Cookie.instance && window != undefined) {
        Cookie.instance = new Cookie(document.cookie)
      }
      return Cookie.instance
    } catch (e) {
      throw new ReferenceError('There are no Window object in the current environment')
    }
  }

  getItem(key) {
    let regExp = new RegExp("(^| )" + key + "=([^;]*)(;|$)")
    let arr = this.instance.match(regExp);

    if (arr != null) return arr[2];
    return null;
  }

  setItem(key, value) {
    let result

    if(value !== undefined) {
      result = ` ${key}=${value};`
    } else {
      result = key
    }

    this.instance += result
  }

  removeItem(name) {
    let cookieObject = this.parse()
    let keys = Object.keys(cookieObject)
    let result = ''

    keys.some((value, index) => {
      if (value == name) {
        delete cookieObject[value]
        keys.splice(index, 1)

        return value == name
      }
    })

    keys.forEach(el => {
      result += el + '=' + cookieObject[el] + '; '
    })

    return this.instance = result
  }

  parse() {
    let regExp = new RegExp('([^=]+)=([^;]+);?\\s*', 'gi')
    let result
    let value = {}

    while ((result = regExp.exec(this.instance)) != null) {
      value[result[1]] = result[2]
    }
    return value
  }

  isExist(key) {
    let regExp = new RegExp(`${key}`, 'gi')

    return regExp.test(this.instance)
  }
}

module.exports = Cookie