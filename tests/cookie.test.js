const {Cookie} = require('../dist/index')
const {Random} = require('mockjs')

const name = Random.cname()

document.cookie = `name=${name};`

let cookie = Cookie.getInstance()

test('cookie is a single instance', () => {
  expect(Cookie.getInstance()).toBe(cookie)
})

test('test instance method: getItem', () => {
  expect(cookie.getItem('name')).toBe(name)
  expect(cookie.getItem('age')).toBe(null)
})

test('test instance method: setItem', () => {
  const desc = Random.cparagraph(1, 3)
  const tmpCookie = document.cookie
  expect(cookie.setItem('desc', desc).instance).toBe(`${tmpCookie}; desc=${desc}`)
  expect(cookie.setItem).toThrow(TypeError('value cannot be undefined'))
})

test('test instance method: removeItem', () => {
  expect(cookie.removeItem('desc').instance).toBe(document.cookie)
})

test('tset instance method: parse', () => {
  expect(cookie.parse()).toEqual({"name": name})
})
