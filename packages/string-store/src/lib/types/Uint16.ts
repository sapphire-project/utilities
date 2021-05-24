import type { IType } from './IType';

export const Uint16: IType<Uint16.Input | Uint16.Output, Uint16.Output> = {
	size: 16,
	deserialize(buffer) {
		return Number(buffer.readBit16());
	},
	serialize(buffer, value) {
		buffer.writeBit16(BigInt(value));
	}
};

export namespace Uint16 {
	export type Output = number;
	export type Input = bigint;
}
