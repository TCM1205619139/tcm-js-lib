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
      if (!Cookie.instance && window !== undefined) {
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

  setItem(key, value, maxAge) {
    if (value !== undefined) {
      document.cookie = `${key}=${value}; max-age=${maxAge === undefined ? null : maxAge}`
      this.instance = document.cookie
    }
    else {
      throw new TypeError('value cannot be undefined')
    }

    return this
  }

  removeItem(name) {
    this.setItem(name, '', 0)

    return this
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
}

export default Cookie