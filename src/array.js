var { getRandom } = require('./common')

module.exports = {
  /**
   * 快速排序
   * @param {Number[]} array
   */
  quickSort: function (array) {
    if (array.length <= 1) {
      return array;
    }

    let point = array[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < array.length; i++) {
      array[i] >= point ? rightArr.push(array[i]) : leftArr.push(array[i]);
    }

    if (leftArr.length >= 2) {
      leftArr = array.quickSort(leftArr)
    }
    if (rightArr.length >= 2) {
      rightArr = array.quickSort(rightArr)
    }

    return leftArr.concat(point, rightArr);
  },
  /**
   * 归并排序
   * @param {Number[]} nums
   */
  mergeSort: function (nums) {
    const merge = function (array, left, right) {
      if (left == right) {
        return [array[left]];
      }
      let mid = Math.ceil((left + right) / 2);
      const leftArr = merge(array, left, mid - 1);
      const rightArr = merge(array, mid, right);

      let i = 0;
      let j = 0;
      let newArr = [];
      while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
          newArr.push(leftArr[i]);
          i++;
        } else {
          newArr.push(rightArr[j]);
          j++;
        }
      }
      if (i < leftArr.length) {
        return newArr.concat(leftArr.slice(i))
      } else if (j < rightArr.length) {
        return newArr.concat(rightArr.slice(j));
      }

      return newArr;
    }

    return merge(nums, 0, nums.length - 1);
  },
  /**
   * 鸽尾式洗牌
   * @param { Array } input
   * @param { Number } time
   */
  riffleShuffle: function (input, time=7) {
    const shuffle = function (array) {
      let minArr
      let maxArr
      let newArr = []
      const c = getRandom(0, array.length)


      minArr = array.slice(0, c)
      maxArr = array.slice(c)

      if (minArr.length > maxArr.length) {
        const tempArr = minArr

        minArr = maxArr
        maxArr = tempArr
      }

      while (minArr.length !== 0) {
        newArr.push(minArr.shift())
        newArr.push(maxArr.shift())
      }

      while (maxArr.length !== 0) {
        newArr.push((maxArr.shift()))
      }

      return newArr
    }

    let result = []

    while (time-- > 0) {
      result = result === []
      ? shuffle(input)
      : shuffle(result)
    }

    return result
  }
}