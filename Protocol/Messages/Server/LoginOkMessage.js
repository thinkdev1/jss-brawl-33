const PiranhaMessage = require('../../PiranhaMessage')

class LoginOkMessage extends PiranhaMessage {
    constructor (client,player,token) {
        super()
        this.id = 20104
        this.client = client
        this.player = player
        this.token = token
        this.version = 1
      }

      async encode () {
        // Account ID
        this.writeInt(0)
        this.writeInt(1)

        // Home ID
        this.writeInt(0)
        this.writeInt(1)

        this.writeString(this.player.token)  // Pass Token
        this.writeString() // Facebook ID
        this.writeString() // Gamecenter ID

        this.writeInt(26)   // Major Version
        this.writeInt(165)  // Build
        this.writeInt(1)    // Minor Version

        this.writeString("dev")  // Environment

        this.writeInt(0)  // Session Count
        this.writeInt(0)  // Play Time Seconds
        this.writeInt(0) // Days Since Started Playing

        this.writeString()  
      }
}

module.exports = LoginOkMessage