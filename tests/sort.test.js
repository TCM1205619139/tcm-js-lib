const {
  quickSort,
  mergeSort
} = require('../index')

const {
  Random
} = require('mockjs')

test('test quickSort method', () => {
  let testArray = []

  for (let i = 0; i < 100; i++) {
    testArray.push(Random.float())
  }

  expect(quickSort([1])).toEqual([1])
  expect(quickSort(testArray)).toEqual(testArray.sort((a, b) => a - b))
})

test('test mergeSort method', () => {
  let testArray = []

  for (let i = 0; i < 100; i++) {
    testArray.push(Random.float())
  }

  expect(mergeSort(testArray)).toEqual(testArray.sort((a, b) => a - b))
})