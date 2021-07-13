export abstract class IUnalignedBuffer {
	protected readonly buffer: Uint8Array;
	protected byteOffset = 0;
	protected memoryBits = 0n;
	protected memoryData = 0n;

	public constructor(buffer: Uint8Array) {
		this.buffer = buffer;
	}
}

export type Bit = 0b00n | 0b01n;
export type Bit2 = 0b00n | 0b01n | 0b10n | 0b11n;
export type Bit4 =
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
