import { Bit, Bit2, Bit4, IUnalignedBuffer } from './IUnalignedBuffer';

export class UnalignedBufferReader extends IUnalignedBuffer {
	public readBit(): Bit {
		return this.read(1n) as Bit;
	}

	public readBit2(): Bit2 {
		return this.read(2n) as Bit2;
	}

	public readBit4(): Bit4 {
		return this.read(4n) as Bit4;
	}

	public readBit8(): bigint {
		return this.read(8n);
	}

	public readBit16(): bigint {
		return this.read(16n);
	}

	public readBit32(): bigint {
		return this.read(32n);
	}

	public readBit64(): bigint {
		return this.read(64n);
	}

	private read(bits: Size) {
		this.ensureBytes(bits);
		const value = this.memoryData >> (this.memoryBits - bits);
		this.advanceBits(bits);

		return value;
	}

	private ensureBytes(bits: Size) {
		while (this.memoryBits < bits) this.ensureByte();
	}

	private ensureByte() {
		this.memoryData <<= 8n;
		this.memoryData |= BigInt(this.buffer[this.byteOffset++]);
		this.memoryBits += 8n;
	}

	private advanceBits(bits: Size) {
		this.memoryData &= ~(this.getMask(bits) << (this.memoryBits - bits));
		this.memoryBits -= bits;
	}

	private getMask(bits: Size) {
		switch (bits) {
			case 1n:
				return 0b0001n;
			case 2n:
				return 0b0011n;
			case 4n:
				return 0x000fn;
			case 8n:
				return 0x00ffn;
			case 16n:
				return 0xffffn;
			case 32n:
				return 0xffff_ffffn;
			case 64n:
				return 0xffff_ffff_ffff_ffffn;
		}
	}
}

type Size = 1n | 2n | 4n | 8n | 16n | 32n | 64n;
