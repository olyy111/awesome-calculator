var test = require('tape')
var cal = require('../lib/calculator')

test('plus', function (t) {
  t.plan(6)
  t.equal(cal.plus(0.1, 0.2), 0.3)
  t.equal(cal.plus(100, 0.2), 100.2)
  t.equal(cal.plus(100, 200), 300)
  t.equal(cal.plus(100, 200), 300)
  t.equal(cal.plus(0, 200), 200)
  t.equal(cal.plus('0.1', '0.2'), 0.3)
})

test('mul', function (t) {
  t.plan(5)
  t.equal(cal.mul(12.32, 7), 86.24)
  t.equal(cal.mul(12.32, 0.7), 8.624)
  t.equal(cal.mul(13, 14), 182)
  t.equal(cal.mul(1264.985, 100), 126498.5)
  t.equal(cal.mul('12.32', '7'), 86.24)
})


