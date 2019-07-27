# awesome calculator 

![](https://travis-ci.org/olyy111/awesome-calculator.svg?branch=master)

## introduce
this kit resolve some awful operating problem, like
"0.1 + 0.2" etc.

## in node
```javascript
npm install awesome-calculator --save
var cal = require('awesome-calculator')
```

## in browser

```javascript
<script src="https://unpkg.com/awesome-calculator"></script>
```

## API

1. mul
multiplied  operating, you can pass number or string
```
var cal = require('awesome-calculator')
console.log(cal.mul('12.32', '7'))

```

2. plus
plus operating,  you can pass number or string
```
var cal = require('awesome-calculator')
console.log(cal.plus('0.1', '0.2'))
```

## License

[MIT](LICENSE)

