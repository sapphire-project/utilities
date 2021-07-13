import { Bit, Bit2, Bit4, IUnalignedBuffer } from './IUnalignedBuffer';

export class UnalignedBufferWriter extends IUnalignedBuffer {
	public constructor(size: number) {
		super(new Uint8Array(size));
	}

	public writeEmpty(bits: bigint) {
		this.memoryData <<= bits;
		this.memoryBits += bits;
		this.ensureCurrentByte();
	}

	public writeBit(bit: Bit): void {
		this.memoryData <<= 1n;
		this.memoryData |= bit & 0b0001n;
		this.memoryBits += 1n;
		this.ensureCurrentByte();
	}

	public writeBit2(bits: Bit2): void {
		this.memoryData <<= 2n;
		this.memoryData |= bits & 0b0011n;
		this.memoryBits += 2n;
		this.ensureCurrentByte();
	}

	public writeBit4(bits: Bit4): void {
		this.memoryData <<= 4n;
		this.memoryData |= bits & 0xfn;
		this.memoryBits += 4n;
		this.ensureCurrentByte();
	}

	public writeBit8(bits: bigint): void {
		this.memoryData <<= 8n;
		this.memoryData |= bits & 0xffn;
		this.memoryBits += 8n;
		this.ensureCurrentByte();
	}

	public writeBit16(bits: bigint): void {
		this.memoryData <<= 16n;
		this.memoryData |= bits & 0xffffn;
		this.memoryBits += 16n;
		this.ensureCurrentByte();
	}

	public writeBit32(bits: bigint): void {
		this.memoryData <<= 32n;
		this.memoryData |= bits & 0xffff_ffffn;
		this.memoryBits += 32n;
		this.ensureCurrentByte();
	}

	public writeBit64(bits: bigint): void {
		this.memoryData <<= 64n;
		this.memoryData |= bits & 0xffff_ffff_ffff_ffffn;
		this.memoryBits += 64n;
		this.ensureCurrentByte();
	}

	public finish() {
		if (this.memoryBits !== 0n) this.writeCurrentByte();
	}

	public toString(): string {
		return String.fromCharCode(...this.buffer);
	}

	private ensureCurrentByte() {
		while (this.memoryBits >= 8) this.writeCurrentByte();
	}

	private writeCurrentByte() {
		this.buffer[this.byteOffset++] = Number(this.memoryData & 0b1111_1111n);
		this.memoryBits -= 8n;
		this.memoryData >>= 8n;
	}
}
