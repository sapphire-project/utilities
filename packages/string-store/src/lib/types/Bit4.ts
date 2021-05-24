import type { IType } from './IType';

export const Bit4: IType<Bit4.Input | Bit4.Output, Bit4.Output> = {
	size: 4,
	deserialize(buffer) {
		return Number(buffer.readBit4()) as Bit4.Output;
	},
	serialize(buffer, value) {
		buffer.writeBit4(BigInt(value) as Bit4.Input);
	}
};

export namespace Bit4 {
	export type Output =
		| 0b0000
		| 0b0001
		| 0b0010
		| 0b0011
		| 0b0100
		| 0b0101
		| 0b0110
		| 0b0111
		| 0b1000
		| 0b1001
		| 0b1010
		| 0b1011
		| 0b1100
		| 0b1101
		| 0b1110
		| 0b1111;

	export type Input =
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
}
