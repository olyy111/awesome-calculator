
function cutFloatTrailerLength(arg) {
  if (isNaN(arg)) { throw new TypeError('the parameters should be type of number or string')}
  const argStr = (arg + '').split('.')[1]
  return argStr ? argStr.length : 0
}

function mulFloatToInt(arg) {
  if (isNaN(arg)) { throw new TypeError('the parameters should be type of number or string')}
  arg = arg + ''
  const arr = arg.split('.')
  const intPart = parseInt(arr[0])
  let rs
  if (!arr[1]) {
    rs = parseInt(arr[0])
  } else {
    const floatPart = parseInt(arr[1])
    const floatLength = arr[1].length
    rs = intPart * Math.pow(10, floatLength) + floatPart
  }
  return rs
}


function accMul() {
  const args = Array.from(arguments)
  args.forEach(arg => {
    if (isNaN(arg)) { throw new TypeError('the parameters should be type of number or string')}
  })
  const lens = []
  const ints = []
  args.forEach((arg, index) => {
    lens[index] = cutFloatTrailerLength(arg)
    ints[index] = mulFloatToInt(arg)
  })
  const mul = ints.reduce((mul, value) => mul * value)
  const sum = lens.reduce((sum, value) => sum + value)
  return mul / Math.pow(10, sum)
}


function accPlus() {
  const args = []
  const srcs = Array.from(arguments)
  args.forEach(arg => {
    if (isNaN(arg)) { throw new TypeError('the parameters should be type of number or string')}
  })
  srcs.forEach((arg, index) => {
    try { args[index] = arg.toString().split('.')[1].length } catch (e) { args[index] = 0 }
  })
  const max = args.sort((a, b) => b > a )[0]
  const m = Math.pow(10, max)
  const sum = srcs.map(arg => accMul(arg, m)).reduce((sum, value) => sum + value)
  return sum / m
}

exports.accPlus = accPlus
exports.accMul = accMul