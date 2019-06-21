var biggybank = require('../index')
biggybank({
  address: "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",
  message: "Send money to b.bitdb.network"
}, function(err, res) {
  console.log(res)
})
