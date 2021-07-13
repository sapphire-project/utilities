import { TextDecoder, TextEncoder } from 'util';
import type { IType } from './IType';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function String(length: number | null = null) {
	if (length === null) {
		const DynamicString: IType<string> = {
			size: -1,
			deserialize(buffer) {
				const length = Number(buffer.readBit8());
				const encoded = new Uint8Array(length);
				for (let i = 0; i < length; ++i) encoded[i] = Number(buffer.readBit8());
				return decoder.decode(encoded);
			},
			serialize(buffer, value) {
				buffer.writeBit8(BigInt(value.length));
				for (const char of encoder.encode(value)) {
					buffer.writeBit8(BigInt(char));
				}
			}
		};

		return DynamicString;
	}

	const FixedString: IType<string> = {
		size: length * 8,
		deserialize(buffer) {
			const encoded = new Uint8Array(length);
			for (let i = 0; i < length; ++i) encoded[i] = Number(buffer.readBit8());
			return decoder.decode(encoded);
		},
		serialize(buffer, value) {
			let remaining = length;
			for (const char of encoder.encode(value)) {
				buffer.writeBit8(BigInt(char));
				--remaining;
			}
			buffer.writeEmpty(BigInt(remaining * 8));
		}
	};

	return FixedString;
}
