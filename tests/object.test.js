const {
  deepClone,
  extend,
  merge
} = require('../dist/index')

const {Random} = require('mockjs')

test('test object method', () => {
  const source = {
    id: Random.guid(),
    age: Random.natural(0, 100),
    name: Random.cname(),
    desc: Random.cparagraph(1, 3)
  }

  expect(deepClone(source)).toEqual(source)
})

test('test extend method', () => {
  const source = {
    id: Random.guid(),
    age: Random.natural(0, 100),
    name: Random.cname(),
    desc: Random.cparagraph(1, 3)
  }
  const obj = {
    id: Random.guid(),
    gender: 'male'
  }
  
  expect(extend(source, obj)).toEqual(Object.assign(source, obj))
})

test('test merge method', () => {
  const source = {
    id: Random.guid(),
    age: Random.natural(0, 100),
    name: Random.cname(),
    desc: Random.cparagraph(1, 3)
  }
  const obj = {
    id: Random.guid(),
    gender: 'male'
  }
  
  expect(merge(source, obj)).toEqual(Object.assign(obj, source))
})