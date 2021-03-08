module.exports = {
  /**
   * 快速排序
   * @param {Number[]} array 
   */
   quickSort: function(array) {
    if(array.length <= 1) {
      return array;
    }
  
    let point = array[0];
    let leftArr = [];
    let rightArr = [];
  
    for(let i=1; i<array.length; i++) {
      array[i] >= point ? rightArr.push(array[i]) : leftArr.push(array[i]);
    }
  
    if(leftArr.length >= 2) {
      leftArr = quickSort(leftArr);
    }
    if(rightArr.length >= 2) {
      rightArr = this.quickSort(rightArr);
    }
  
    return leftArr.concat(point, rightArr);
  },
  /**
   * 归并排序
   * @param {Number[]} nums 
   */
  mergeSort: function (nums) {
    var merge = function (array, left, right) {
      if (left == right) {
        return [array[left]];
      }
      let mid = Math.ceil((left+right)/2);
      const leftArr = merge(array, left, mid-1);
      const rightArr = merge(array, mid, right);

      let i=j=0;
      let newArr = [];
      while(i<leftArr.length && j<rightArr.length) {
        if(leftArr[i] < rightArr[j]) {
          newArr.push(leftArr[i]);
          i++;
        } else {
          newArr.push(rightArr[j]);
          j++;
        }
      }
      if(i<leftArr.length) {
        return newArr.concat(leftArr.slice(i))
      } else if(j<rightArr.length) {
        return newArr.concat(rightArr.slice(j));
      }

      return newArr;
    }

    return merge(nums, 0, nums.length - 1);
  }
}