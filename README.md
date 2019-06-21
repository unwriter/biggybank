# biggybank

![icon](icon.png)

biggybank is a drop-in library that lets you refill a Bitcoin address from console using:

1. QRCode
2. MoneyButton (Through [ButtonPage](https://button.bitdb.network)
3. [Send a PR](https://github.com/unwriter/biggybank/compare) if you have another method

# Install

Install both bsv and biggybank

```
npm install --save bsv
npm install --save biggybank
```

# Usage

Biggybank returns a string which includes the QRCode and other messages

```
const biggybank = require('biggybank')
biggybank({ address: "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut" }, function(err, str) {
  console.log(str)
})
```

Add a simple message to the header:

```
const biggybank = require('biggybank')
biggybank({
  address: "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",
  message: "Send money to b.bitdb.network"
}, function(err, str) {
  console.log(str)
})
```

# Advanced Usage for Moneybutton

You can also manually construct moneybutton payload:

```
const biggybank = require('biggybank')
biggybank({
  payload: {
    to: "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",
    editable: true,
    currency: "USD",
    type: "tip"
  },
  message: "Send money to b.bitdb.network"
}, function(err, str) {
  console.log(str)
})
```
