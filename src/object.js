module.exports = {
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
   * 将 p中的可枚举属性复制到 o中，若 o中有同名属性则不受影响
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
  }
}