const PiranhaMessage = require('../../PiranhaMessage');
const LoginOkMessage = require('../Server/LoginOkMessage');
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage');

class LoginMessage extends PiranhaMessage {
  constructor (bytes, client, player, databaseManager) {
    super(bytes);
    this.client = client;
    this.player = player;
    this.databaseManager = databaseManager;
    this.id = 10101;
    this.version = 0;
  }

  async decode () {
    // this.readInt()
    this.player.high_id = this.readInt();
    this.player.low_id = this.readInt();
    this.player.token = this.readString();
    this.major = this.readInt();
    this.minor = this.readInt();
    this.build = this.readInt();
  }

  async process () {

    await new LoginOkMessage(this.client, this.player, this.token).send();
    await new OwnHomeDataMessage(this.client, this.player).send();
    console.log(`ID - ${this.player.low_id} ${this.major}.${this.build}.${this.minor}`);

  }
}

module.exports = LoginMessage;
