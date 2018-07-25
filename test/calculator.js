var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

var cal = require('../lib/calculator')

describe('plus', function () {
  it('should return accurate number', function () {
    expect(cal.plus(0.1, 0.2)).to.equal(0.3)
  })
  it('should return accurate number', function () {
    expect(cal.plus(100, 0.2)).to.equal(100.2)
  })
  it('should return accurate number', function () {
    expect(cal.plus(100, 200)).to.equal(300)
  })
  it('should return accurate number', function () {
    expect(cal.plus(0, 200)).to.equal(200)
  })
  it('should only accept number or string', function () {
    expect(cal.plus('0.1', '0.2')).to.equal(0.3)
  })
})


describe('plus', function () {
  it('should return accurate number', function () {
    expect(cal.mul(12.32, 7)).to.equal(86.24)
  })
  it('should return accurate number', function () {
    expect(cal.mul(12.32, 0.7)).to.equal(8.624)
  })
  it('should return accurate number', function () {
    expect(cal.mul(13, 14)).to.equal(182)
  })
  it('should return accurate number', function () {
    expect(cal.mul(1264.985, 100)).to.equal(126498.5)
  })
  it('should only accept number or string', function () {
    expect(cal.mul('12.32', '7')).to.equal(86.24)
  })
})
