const qrcode = require('qrcode-terminal');
const datapay = require('datapay')
module.exports = function(o, done) {
  if (o.address || (o.payload && o.payload.to)) {
    qrcode.generate("bitcoin:"+o.address, function(code) {
      datapay.connect('https://bchsvexplorer.com').address(o.address, function(err, info) {
        if (err) {
          done(err, null)
        } else {
          let message = `
#################################################################################
##
## bitcoin:${o.address}
${o.message ? "##\n## " + o.message + '\n##' : '##'}
## Balance: ${info.balance} satoshis
## 
#################################################################################\n\n`;
          message += code;
          message += "\n\n[HOW TO REFILL]"
          message += ("\nMethod 1. Copy and paste address: bitcoin:" + o.address + "?sv")
          message += ("\nMethod 2. Scan the QR code above.\n")
          let payload = o.payload ? o.payload : {
            "to": o.address,
            "editable": true,
            "currency": "USD",
            "type": "tip"
          }
          let str = JSON.stringify(payload);
          let b64 = Buffer.from(str).toString("base64");
          let url = "https://button.bitdb.network/#" + b64;
          message += ("Method 3. Use ButtonPage to refill with Moneybutton:\n" + url + "\n");
          done(null, message)
        }
      });
    })
  } else {
    done("You haven't generated a keypair. Look inside the .bit file, or generate a new one with 'bit init'", null)
  }
}
