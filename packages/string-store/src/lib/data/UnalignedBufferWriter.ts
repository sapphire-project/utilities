import { IUnalignedBuffer } from './IUnalignedBuffer';

export class UnalignedBufferWriter extends IUnalignedBuffer {
	public constructor(size: number) {
		super(new Uint8Array(size));
	}

	public writeEmpty(bits: number) {
		this.memoryData <<= BigInt(bits);
		this.memoryBits += bits;
		this.ensureCurrentByte();
	}

	public writeBit(bit: Bit): void {
		this.memoryData <<= 1n;
		this.memoryData |= bit & 0b0001n;
		this.memoryBits += 1;
		this.ensureCurrentByte();
	}

	public writeBit2(bits: Bit2): void {
		this.memoryData <<= 2n;
		this.memoryData |= bits & 0b0011n;
		this.memoryBits += 2;
		this.ensureCurrentByte();
	}

	public writeBit4(bits: Bit4): void {
		this.memoryData <<= 4n;
		this.memoryData |= bits & 0xfn;
		this.memoryBits += 4;
		this.ensureCurrentByte();
	}

	public writeBit8(bits: bigint): void {
		this.memoryData <<= 8n;
		this.memoryData |= bits & 0xffn;
		this.memoryBits += 8;
		this.ensureCurrentByte();
	}

	public writeBit16(bits: bigint): void {
		this.memoryData <<= 16n;
		this.memoryData |= bits & 0xffffn;
		this.memoryBits += 16;
		this.ensureCurrentByte();
	}

	public writeBit32(bits: bigint): void {
		this.memoryData <<= 32n;
		this.memoryData |= bits & 0xffff_ffffn;
		this.memoryBits += 32;
		this.ensureCurrentByte();
	}

	public writeBit64(bits: bigint): void {
		this.memoryData <<= 64n;
		this.memoryData |= bits & 0xffff_ffff_ffff_ffffn;
		this.memoryBits += 64;
		this.ensureCurrentByte();
	}

	public finish() {
		if (this.memoryBits !== 0) this.writeCurrentByte();
	}

	public toString(): string {
		return String.fromCharCode(...this.buffer);
	}

	private ensureCurrentByte() {
		while (this.memoryBits >= 8) this.writeCurrentByte();
	}

	private writeCurrentByte() {
		this.buffer[this.byteOffset++] = Number(this.memoryData & 0b1111_1111n);
		this.memoryBits -= 8;
		this.memoryData >>= 8n;
	}
}

type Bit = 0b00n | 0b01n;
type Bit2 = 0b00n | 0b01n | 0b10n | 0b11n;
type Bit4 =
	| 0b0000n
	| 0b0001n
	| 0b0010n
	| 0b0011n
	| 0b0100n
	| 0b0101n
	| 0b0110n
	| 0b0111n
	| 0b1000n
	| 0b1001n
	| 0b1010n
	| 0b1011n
	| 0b1100n
	| 0b1101n
	| 0b1110n
	| 0b1111n;
