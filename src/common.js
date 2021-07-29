/**
 * 获取一个满足 [ start, end ) 的随机数
 * @param {Number} start
 * @param {Number} end
 * @returns {Number}
 */
const getRandom = (start, end) => {
  return Math.floor(Math.random() * end) + start
}

/**
 * 异步非阻塞的不可中断compose函数
 * @param  {Function[]} fns 
 * @returns {Function => Promise}
 */
const composeAsync = (...fns) => {
  return (input) => {
    return fns.reduce(
      (sequens, fn) => {
        return sequens.then(async data => {
          return Promise.resolve(await fn(data))
        })
      },
      Promise.resolve(input)
    )
  }
}

/**
 * 同步阻塞的不可中断compose函数
 * @param  {Function[]} fns 
 * @returns {Function}
 */
const composeSync = (...fns) => input => fns.reduce(
  async (acc, fn) => await fn(acc),
    input
)

module.exports = {
  getRandom,
  composeAsync,
  composeSync
}