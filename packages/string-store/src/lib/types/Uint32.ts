import type { IType } from './IType';

export const Uint32: IType<Uint32.Input | Uint32.Output, Uint32.Output> = {
	size: 32,
	deserialize(buffer) {
		return Number(buffer.readBit32());
	},
	serialize(buffer, value) {
		buffer.writeBit32(BigInt(value));
	}
};

export namespace Uint32 {
	export type Output = number;
	export type Input = bigint;
}
