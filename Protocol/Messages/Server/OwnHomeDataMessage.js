const PiranhaMessage = require('../../PiranhaMessage')
const Skins = require('../../../CSVParser/Skins')
const Cards = require("../../../CSVParser/Cards")
const skills = Cards.getAllSkills(4)
const skins = Skins.getAllSkins()

class OwnHomeDataMessage extends PiranhaMessage {
  constructor (client,player) {
    super()
    this.id = 24101
    this.client = client
    this.player = player
    this.version = 1
  }

  async encode () {

    this.writeVInt(2021122) //TIMESTAMp
    this.writeVInt(75735) //SECOND
    this.writeVInt(5000)
    this.writeVInt(5000)

    this.writeVInt(100)
    this.writeVInt(97) //trophy road rewardnik
    this.writeVInt(5000) //exp
    this.writeDataReference(28, 0)  // Player Icon
    this.writeDataReference(43, 0)  // Name Color
    
    this.writeVInt(0)  // Array
    this.writeVInt(0)  // Array
    this.writeVInt(0)  // Array
    this.writeVInt(0)  // Array
    
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeByte(0)
    this.writeVInt(1000)
    this.writeVInt(10)
    this.writeVInt(20)
    this.writeVInt(30)
    
    //===sub_53AF00===//
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)  // Array
    //================//
    
    this.writeByte(0)  // 3 Boolean
    
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    
    this.writeVInt(0)  // Array (v16)
    
    this.writeVInt(0)  // Array (v20)
    
    this.writeVInt(200)
    this.writeVInt(0)
    
    this.writeVInt(0)  // Array (v23)
    
    this.writeVInt(99999)
    this.writeVInt(0)
    
    this.writeDataReference(16, 0)  // Selected Brawler
    
    this.writeString("RU")
    this.writeString("awesome")  // content creator
    
    this.writeVInt(1)  // Array (v25)
    this.writeInt(0)
    this.writeInt(0)
    
    this.writeVInt(1)  // Array (v28)
    this.writeVInt(0)
    this.writeDataReference(16, 0)
    this.writeVInt(0)
    
    this.writeVInt(1)  // Array (v31) Season Data
   /* for x in range(1):
        this.writeVInt(4)
        this.writeVInt(0)
        this.writeByte(0)
        this.writeVInt(1)
        this.writeByte(0)*/
    for (let x = 1; x <= 1; x++) {
      this.writeVInt(4);
      this.writeVInt(0);
      this.writeByte(0);
      this.writeVInt(1);
      this.writeByte(0);
     }
    
    this.writeVInt(0)  // Array (v34)
    
    this.writeByte(1)
    this.writeVInt(0)
    
    this.writeByte(1)
    this.writeVInt(0)
    
    // LogicClientHome CHUNK 2
    
    this.writeVInt(0)  // v4
    
    this.writeVInt(16)
    for (let x in[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 21, 22, 23, 24]) {
      // this.writeVInt(x) would be written as
      this.writeVInt(x);
    }
    
    this.writeVInt(1)  // Events
    //Event Start
    this.writeVInt(0)
    this.writeVInt(1)
    this.writeVInt(0)
    this.writeVInt(75992)
    this.writeVInt(10)
    this.writeDataReference(15, 7)
    this.writeVInt(3)
    this.writeVInt(3)
    this.writeString("TID_WEEKEND_EVENT")
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)  // Array (v4) modifiers
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeByte(0)  //sub_5F0248
    this.writeVInt(0)
    //Event End
    
    this.writeVInt(0)  // Upcoming Events
    
    this.writeVInt(0)  // Array
    this.writeVInt(0)  // Array
    this.writeVInt(0)  // Array
    this.writeVInt(0)  // Array
    
    this.writeByte(0)
    
    this.writeVInt(0)  // Array (v18)
    
    this.writeVInt(0)  // Array (v21)
    
    this.writeVInt(0)  // Array (v24)
    
    this.writeVInt(0)  // Array (v27)
    
    this.writeByte(0)  // 2 boolean arrays
    
    this.writeInt(0)
    this.writeInt(1)
    
    this.writeVInt(0)  // v8 (Notification Factory)
    this.writeVInt(0)  // v9
    // Array for v8 Here (yes, under v9)
    
    this.writeByte(0)  // v10
    this.writeVInt(0)  // Array (v11)
    
    this.writeVInt(0)  // Array result
    
    // LogicClientAvatar
    
    this.writeVInt(0)
    this.writeVInt(1)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    
    this.writeString("awesome")  // Name
    this.writeByte(1)  // NameSetByUser
    this.writeInt(0)
    
    this.writeVInt(8)  // Commodity Array Count
    
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(2)
    this.writeVInt(2)  // Tutorial State
    
    this.writeVInt(2)

  }
}

module.exports = OwnHomeDataMessage
