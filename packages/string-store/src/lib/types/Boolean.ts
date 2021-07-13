import type { IType } from './IType';

export const Boolean: IType<Boolean.Type> = {
	size: 1,
	deserialize(buffer) {
		return buffer.readBit() === 1n;
	},
	serialize(buffer, value) {
		buffer.writeBit(value ? 1n : 0n);
	}
};

export namespace Boolean {
	export type Type = boolean;
}
