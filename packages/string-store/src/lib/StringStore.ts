import { TextEncoder } from 'util';
import { UnalignedBufferReader } from './data/UnalignedBufferReader';
import { UnalignedBufferWriter } from './data/UnalignedBufferWriter';
import { StringStoreEntry } from './StringStoreEntry';

export class StringStore {
	private readonly names = new Map<string, StringStoreEntry>();
	private readonly ids = new Map<bigint, StringStoreEntry>();

	public get size(): number {
		return this.ids.size;
	}

	public add(name: string, cb: (entry: StringStoreEntry) => void): this {
		const entry = new StringStoreEntry(BigInt(this.names.size), name);
		this.names.set(entry.name, entry);
		this.ids.set(entry.id, entry);

		cb(entry);

		return this;
	}

	public serialize(name: string, ...parameters: readonly unknown[]): string {
		const entry = this.names.get(name);
		if (entry === undefined) throw new Error(`There is no entry named ${name}.`);

		const writer = new UnalignedBufferWriter(entry.size === -1 ? 100 : entry.size + 8);
		writer.writeBit8(entry.id);
		entry.serialize(writer, ...parameters);
		writer.finish();
		return writer.toString();
	}

	public deserialize(content: string): Record<string, unknown> {
		const reader = new UnalignedBufferReader(StringStore.encoder.encode(content));
		const id = reader.readBit8();

		const entry = this.ids.get(id);
		if (entry === undefined) throw new Error(`Could not find a string store with the ID of ${id}.`);

		return entry.deserialize(reader);
	}

	private static encoder = new TextEncoder();
}
