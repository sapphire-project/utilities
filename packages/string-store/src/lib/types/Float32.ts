import type { IType } from './IType';

const float = new Float32Array(1);
const int32 = new Uint32Array(float.buffer);

export const Float32: IType<Float32.Input | Float32.Output, Float32.Output> = {
	size: 32,
	deserialize(buffer) {
		int32[0] = Number(buffer.readBit32());
		return float[0];
	},
	serialize(buffer, value) {
		float[0] = value;
		buffer.writeBit32(BigInt(int32[0]));
	}
};

export namespace Float32 {
	export type Output = number;
	export type Input = number;
}
