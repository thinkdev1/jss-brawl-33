
const Utils = require("../Utilities/Utils");

class BitStream {
    constructor(data) {
        if (data == null) {
            this.buffer = new Buffer.alloc(0);//this.buffer = 
        }
        else {
            this.buffer = data;
        }
        this.offset = 0;
        this.bitOffset = 0;
    }


    }
    readBit() {
        if (this.offset > this.buffer.length) {
            return 0;
        }

        var value = ((this.buffer[this.offset] >> this.bitOffset) & 1);
        this.bitOffset++;
        if (this.bitOffset == 8) {
            this.bitOffset = 0;
            this.offset += 1;
        }

        return value;
    }

    readBytes(length) {
        let data = [];
        for (var i = 0; i < length;)
        {
            var value = 0;
            for (var p = 0; p < 8 && i < length; p++, i++) {
                value |= this.readBit() << p;  
                
            }
            data.push(value); 
            
        }
        return Utils.arrayToBytes(data);
    }

    readPositiveInt(bitsCount) {
        var bytes = this.readBytes(bitsCount);
        return Utils.getInt(bytes);
    }

    readInt(bits) {
        var v2 = 2 * this.readPositiveInt(1) - 1;
        return v2 * this.readPositiveInt(bits);
    }

    readPositiveVIntMax255() {
        var v2 = this.readPositiveInt(3);
        return this.readPositiveInt(v2);
    }

    // Write region

    writeBit(data) {
        if (this.bitOffset == 0) {
            this.offset += 1;
            this.writeByte(0xFF);
        }

        var value = this.buffer[this.offset-1];
        value &= ~(1 << this.bitOffset);
        value |= (data << this.bitOffset)
        this.buffer[this.offset - 1] = value;
        this.bitOffset = (this.bitOffset + 1) % 8;
    }
    writeBoolean(value) {
        if (value) {
            this.writePositiveInt(1, 1);
        }
        else {
            this.writePositiveInt(0, 1);
        }
    }
    writeBits(bits, count) {
        var position = 0;
        for (var i = 0; i < count;){ 
            var value;
            for (var p = 0; p < 8 && i < count; i++, p++) {
                value = ((bits[position] >> p) & 1);
                this.writeBit(value);
            }
            position++;
        }
    }
    writePVIntMax65535OZ(value) {
    if (value === 0) {
        this.writePositiveInt(1, 1);
        return;
    }
    this.writePositiveInt(0, 1);
    this.writePositiveVInt(value, 4);
}
    writePositiveInt(value, bits) {
        this.writeBits(Utils.intToBytes(value), bits);
    }

    writeInt(value, bits) {
        var val = value;
        if (val <= -1) {
            this.writePositiveInt(0, 1);
            val = -value;
        }
        else if (val >= 0) {
            this.writePositiveInt(1, 1);
            val = value;
        }

        this.writePositiveInt(val, bits);
    }

    writePositiveVInt(value, bits) {
        var v3 = 1;
        var v7 = value;

        if (v7 != 0) {
            if (v7 < 1) {
                v3 = 0;
            }
            else {
                var v8 = v7;
                v3 = 0;
                do {
                    v3 += 1;
                    v8 >>= 1;
                }
                while (v8 != 0);
            }
        }

        this.writePositiveInt(v3 - 1, bits);
        this.writePositiveInt(v7, v3);
    }

    writeByte(value) {
        this.ensureCapacity(1);
        this.buffer[this.offset-1] = value;
    }

    ensureCapacity(capacity) {
        var bufferLength = this.buffer.length;

        if (this.offset + capacity > bufferLength) {
            var tmpBuffer = new Buffer.alloc(capacity);
            this.buffer = Buffer.concat([this.buffer, tmpBuffer]);
        }
    }




}

module.exports = BitStream;
