import type { IType } from './IType';

export const Bit2: IType<Bit2.Input | Bit2.Output, Bit2.Output> = {
	size: 2,
	deserialize(buffer) {
		return Number(buffer.readBit2()) as Bit2.Output;
	},
	serialize(buffer, value) {
		buffer.writeBit2(BigInt(value) as Bit2.Input);
	}
};

export namespace Bit2 {
	export type Output = 0b00 | 0b01 | 0b10 | 0b11;
	export type Input = 0b00n | 0b01n | 0b10n | 0b11n;
}
