import type { IType } from './IType';

export const Uint64: IType<Uint64.Input, Uint64.Output> = {
	size: 64,
	deserialize(buffer) {
		return buffer.readBit64();
	},
	serialize(buffer, value) {
		buffer.writeBit64(BigInt(value));
	}
};

export namespace Uint64 {
	export type Output = bigint;
	export type Input = bigint | number;
}
