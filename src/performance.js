module.exports = {
  /**
   * 节流函数
   * @param {Function} callback  
   * @param {Number} throttleTime 节流时间至少多少ms触发一次
   * @param {Number} timerTime  防抖时间
   * @return {Function}
   */
   throttle:(callback, throttleTime, timerTime) => {
    let timer;
    let startTime = new Date().getTime();

    return function() {
      let curTime = new Date().getTime();

      clearTimeout(timer);
      if(curTime - startTime > throttleTime) {
        if (callback) return Promise.resolve(callback())
        startTime = new Date().getTime();
      } else {
        timer = setTimeout(() => {
          if (callback) return Promise.reject(callback())
        }, timerTime);
      }
    }
  },
  /**
   * 防抖函数
   * @param {Function} callback 
   * @param {Number} time
   * @return {Function}
   */
  debounce:(callback, time) => {
    let timer;

    return function () {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        if (callback) return Promise.resolve(callback())
      }, time);
    }
  },
  /**
   * 同步函数阻塞执行
   * @param {Number} sleepTime
   */
  sleep: async (callback, sleepTime) => {
    await new Promise(() => {
      setTimeout(() => {
        if (callback) return
      }, sleepTime);
    })
  }
}