import type { UnalignedBufferReader } from '../data/UnalignedBufferReader';
import type { UnalignedBufferWriter } from '../data/UnalignedBufferWriter';

export interface IType<SType = unknown, DType = SType> {
	readonly size: number;
	serialize(buffer: UnalignedBufferWriter, value: SType): void;
	deserialize(buffer: UnalignedBufferReader): DType;
}
