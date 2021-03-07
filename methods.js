export default {
  /**
   * 将p中的属性复制到o中，若o中有与p相同的属性，则覆盖o
   * @param {Object} o 
   * @param {Object} p 
   */
  extend: function(o, p) {
    for(let key in p) {
      o[key] = p[key];
    }
    return o;
  },

  /**
   * 将p中的可枚举属性复制到o中，若o中有同名属性则不受影响
   * @param {Object} o 
   * @param {Object} p 
   */
  merge: function(o, p) {
    for(let prop in p) {
      if(o.hasOwnProperty(prop)) continue;
      o[prop] = p[prop]; 
    }
    return o;
  },
  /**
   * @param {Object} source 
   */
  deepClone: (source) => {
    let target = source instanceof Array ? [] : {};

    for(let key in source) {
      target[key] = (typeof source[key]).toLocaleLowerCase() === 'object'
      ? this.deepClone(source[key])
      : source[key];
    }

    return target;
  },
  /**
   * 节流函数
   * @param {Function} callback  
   * @param {Number} throttleTime 节流时间至少多少ms触发一次
   * @param {Number} timerTime  防抖时间
   */
  throttle:(callback, throttleTime, timerTime) => {
    let timer;
    let startTime = new Date().getTime();

    return function() {
      let curTime = new Date().getTime();

      clearTimeout(timer);
      if(curTime - startTime > throttleTime) {
        callback();
        startTime = new Date().getTime();
      } else {
        timer = setTimeout(() => {
          callback();
        }, timerTime);
      }
    }
  },
  /**
   * 防抖函数
   * @param {Function} callback 
   * @param {Number} time
   */
  debounce:(callback, time) => {
    let timer;

    return function () {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        callback();
      }, time);
    }
  },
  /**
   * 同步函数阻塞执行
   * @param {Number} sleepTime
   */
  sleep: async (sleepTime) => {
    await new Promise(() => {
      setTimeout(() => {}, sleepTime);
    })
  },
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