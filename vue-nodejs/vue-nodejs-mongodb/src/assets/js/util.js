// 该文件可以放共享的方法
/***
 * 方法内需要做到可用性，兼容性，边界处理，异常处理，用户输入校验，可靠性，可维护性
 * 目的只是为了团队开发，减少bug的出现，便于二次开发
 */

var dataType = {
  throw: function (str) {
    throw new Error(str)
  },
  truth: function () {
    return true
  },
  isExisty: function (data) {
    return data !== undefined
  },
    // 有的时候需要返回true or false,有的时候需要抛出错误，所以传入一个参数灵活返回
  hasFn: function (fn) {
    if (!fn) {
      this.throw('the second parameter is a function, that is required')
    }
  },
  isString: function (data, fn) {
    this.hasFn(fn)
    if (typeof data !== 'string') {
      return fn()
    }
  },
  isBoolean: function (data, fn) {
    this.hasFn(fn)
    if (typeof data !== 'boolean') {
      return fn()
    }
  },
  isNum: function (data, fn) {
    this.hasFn(fn)
    if (typeof data !== 'number') {
      return fn()
    }
  },
  throwNum: function () {
    throw new Error('Parameter is not an Number')
  },
  Int: function (data, fn) {
    this.hasFn(fn)
    this.isNum(data, this.throwNum)
    if (!/^[-|]\d+$/.test(data)) {
      return fn()
    }
  },
  throwInt: function () {
    throw new Error('Pa rameter is not an integer')
  },
  Float: function (data, fn) {
    this.hasFn(fn)
    this.isNum(data, this.throwNum)
    if (!/^[-|]\.{1}[0-9]+/.test(data)) {
      return fn()
    }
  },
  throwFloat: function () {
    throw new Error('Parameter is not an Float')
  },
  isObject: function (data, fn) {
    this.hasFn(fn)
    if (Object.prototype.toString.call(data) !== 'object object') {
      return fn()
    }
  },
  isArray: function (data, fn) {
    this.hasFn(fn)
    if (Object.prototype.toString.call(data) !== 'object Array') {
      return fn()
    }
  }
}

export default{
  changeTimeHM (time) {
  if (dataType.Float(time, function () { return true })) {
    let data = new Date(time)
    return data.getHours() + ':' + data.getMinutes()
  }
  },
  getCalender(){
    let date = new Date();
    let week=['日','一','二','三','四','五','六'];
    let calender=[];
    for(let i=0;i<week.length;i++){
      calender.push({
        week: i==6?'今天':week[(new Date(new Date().setDate(date.getDate()-6+i))).getDay()],
        date: new Date((new Date().setDate(date.getDate()-6+i))).getDate(),
        month: new Date((new Date().setDate(date.getDate()-6+i))).getMonth()+1
      })
    }
    return calender;
},
  isNull(data){
    return dataType.isExisty(data, function(){return true;})
}
 
}
