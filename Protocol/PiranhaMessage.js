const ByteStream = require('../ByteStream')

class PiranhaMessage extends ByteStream {
  constructor (bytes) {
    super(bytes)
    this.id = 0
    this.client = null
    this.player = null
    this.version = 0
  }

  encode () {

  };

  decode () {

  };

  process () {

  }
}

module.exports = PiranhaMessage
