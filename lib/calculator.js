
;(function (name, definition) {
    var hasDefine = typeof define === 'function',
        hasExports = typeof module !== 'undefined' && module.exports;
        
  if (hasDefine) {
    define(definition);
  } else if (hasExports) {
    module.exports = definition();
  } else {
    this[name] = definition();
  }
})('cal', function () {
  function cutFloatTrailerLength(arg) {
    if (isNaN(arg)) { throw new TypeError('the parameter should be type of number or string')}
    var argStr = (arg + '').split('.')[1]
    return argStr ? argStr.length : 0
  }
  
  function mulFloatToInt(arg) {
    if (isNaN(arg)) { throw new TypeError('the parameter should be type of number or string')}
    arg = arg + ''
    var arr = arg.split('.')
    var intPart = parseInt(arr[0])
    let rs
    if (!arr[1]) {
      rs = parseInt(arr[0])
    } else {
      var floatPart = parseInt(arr[1])
      var floatLength = arr[1].length
      rs = intPart * Math.pow(10, floatLength) + floatPart
    }
    return rs
  }
  
  
  function mul() {
    var args = Array.from(arguments)
    for(var i=0;i<args.length;i++){
      if (isNaN(args[i])) {
        throw new TypeError('the parameter should be number or string')
      }
    }
    var lens = []
    var ints = []
    args.forEach((arg, index) => {
      lens[index] = cutFloatTrailerLength(arg)
      ints[index] = mulFloatToInt(arg)
    })
    var mul = ints.reduce((mul, value) => mul * value)
    var sum = lens.reduce((sum, value) => sum + value)
    return mul / Math.pow(10, sum)
  }
  
  
  function plus() {
    var args = []
    var srcs = Array.from(arguments)
    for(var i=0;i<args.length;i++){
      if (isNaN(args[i])) {
        throw new TypeError('the parameter should be number or string')
      }
    }
    
    srcs.forEach((arg, index) => {
      try { args[index] = arg.toString().split('.')[1].length } catch (e) { args[index] = 0 }
    })
    var max = args.sort((a, b) => b > a )[0]
    var m = Math.pow(10, max)
    var sum = srcs.map(arg => mul(arg, m)).reduce((sum, value) => sum + value)
    return sum / m
  }

  return {mul, plus}
});