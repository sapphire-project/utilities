import { Types } from '../src';
import { UnalignedBufferReader } from '../src/lib/data/UnalignedBufferReader';
import { StringStoreEntry } from '../src/lib/StringStoreEntry';

describe('StringStoreEntry', () => {
	test('GIVEN empty entry THEN size returns 0', () => {
		const store = new StringStoreEntry(0n, 'test');

		expect(store.id).toBe(0n);
		expect(store.name).toBe('test');
		expect(store.size).toBe(0);
	});

	test('GIVEN entry with one field THEN returns typed object', () => {
		const store = new StringStoreEntry(0n, 'test').add('user', Types.Snowflake);
		const reader = new UnalignedBufferReader(new Uint8Array([0x03, 0x5b, 0xe9, 0x45, 0x7a, 0x82, 0x00, 0x03]));

		expect(store.size).toBe(64);
		expect(store.deserialize(reader)).toStrictEqual({ type: 'test', user: '242043489611808771' });
	});
});
