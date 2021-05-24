import type { UnalignedBufferReader } from './data/UnalignedBufferReader';
import type { UnalignedBufferWriter } from './data/UnalignedBufferWriter';
import type { IType } from './types/IType';

export class StringStoreEntry {
	public readonly id: bigint;
	public size = 0;
	private readonly entries = new Map<string, IType>();

	public constructor(id: bigint) {
		this.id = id;
	}

	public add(name: string, type: IType) {
		if (this.size !== -1) {
			if (type.size === -1) this.size = -1;
			else this.size += type.size;
		}

		if (this.entries.has(name)) {
			throw new Error(`The entry ${name} already exists.`);
		}

		this.entries.set(name, type);
		return this;
	}

	public serialize(writer: UnalignedBufferWriter, ...parameters: readonly unknown[]): void {
		let i = 0;
		for (const type of this.entries.values()) {
			if (i >= parameters.length) writer.writeEmpty(type.size);
			else type.serialize(writer, parameters[i]);
		}
	}

	public deserialize(reader: UnalignedBufferReader): Record<string, unknown> {
		const entries: [string, unknown][] = [];
		for (const [name, type] of this.entries.entries()) {
			entries.push([name, type.deserialize(reader)]);
		}

		return Object.fromEntries(entries);
	}
}
