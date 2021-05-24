import { StringStoreEntry } from '../src/lib/StringStoreEntry';

describe('StringStoreEntry', () => {
	test('GIVEN empty entry THEN size returns 0', () => {
		const store = new StringStoreEntry(0n);

		expect(store.id).toBe(0n);
		expect(store.size).toBe(0);
	});
});
