module.exports = {
  /**
   * 获取一个满足 [ start, end ) 的随机数
   * @param {Number} start
   * @param {Number} end
   * @returns {Number}
   */
  getRandom: function (start, end) {
    return Math.floor(Math.random() * end) + start
  }
}