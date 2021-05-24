import type { IType } from './IType';

const float = new Float64Array(1);
const int64 = new BigUint64Array(float.buffer);

export const Float64: IType<Float64.Input | Float64.Output, Float64.Output> = {
	size: 64,
	deserialize(buffer) {
		int64[0] = buffer.readBit64();
		return float[0];
	},
	serialize(buffer, value) {
		float[0] = value;
		buffer.writeBit64(BigInt(int64[0]));
	}
};

export namespace Float64 {
	export type Output = number;
	export type Input = number;
}
