import { Bit, Bit2, Bit4, IUnalignedBuffer } from './IUnalignedBuffer';

export class UnalignedBufferReader extends IUnalignedBuffer {
	public readBit(): Bit {
		if (this.memoryBits < 1) this.ensureByte();

		const bit = this.memoryData & 0b01n;
		this.advanceBits(1);

		return bit as Bit;
	}

	public readBit2(): Bit2 {
		if (this.memoryBits < 2) this.ensureByte();

		const bits = this.memoryData & 0b11n;
		this.advanceBits(2);

		return bits as Bit2;
	}

	public readBit4(): Bit4 {
		if (this.memoryBits < 4) this.ensureByte();

		const bits = this.memoryData & 0b1111n;
		this.advanceBits(4);

		return bits as Bit4;
	}

	public readBit8(): bigint {
		if (this.memoryBits < 8) this.ensureByte();

		const bits = this.memoryData & 0b1111_1111n;
		this.advanceBits(8);

		return bits;
	}

	public readBit16(): bigint {
		if (this.memoryBits < 8) this.ensureByte();
		if (this.memoryBits < 16) this.ensureByte();

		const bits = this.memoryData & 0b1111_1111_1111_1111n;
		this.advanceBits(16);

		return bits;
	}

	public readBit32(): bigint {
		const bits = (this.readBit16() << 16n) | this.readBit16();
		return bits;
	}

	public readBit64(): bigint {
		const bits = (this.readBit32() << 32n) | this.readBit32();
		return bits;
	}

	private ensureByte() {
		this.memoryData <<= 8n;
		this.memoryData |= BigInt(this.buffer[this.byteOffset++]);
		this.memoryBits += 8;
	}

	private advanceBits(bits: number) {
		this.memoryData >>= BigInt(bits);
		this.memoryBits -= bits;
	}
}
