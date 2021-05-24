import type { IType } from './IType';

export const Bit: IType<Bit.Input | Bit.Output, Bit.Output> = {
	size: 1,
	deserialize(buffer) {
		return Number(buffer.readBit()) as Bit.Output;
	},
	serialize(buffer, value) {
		buffer.writeBit(BigInt(value) as Bit.Input);
	}
};

export namespace Bit {
	export type Output = 0b00 | 0b01;
	export type Input = 0b00n | 0b01n;
}
