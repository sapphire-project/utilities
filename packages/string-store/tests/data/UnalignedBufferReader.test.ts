/* eslint-disable @typescript-eslint/dot-notation */
import { UnalignedBufferReader } from '../../src/lib/data/UnalignedBufferReader';

describe('UnalignedBufferReader', () => {
	test('GIVEN initial state THEN returns correct data', () => {
		const reader = new UnalignedBufferReader(new Uint8Array([0b1000_0000]));
		expect(reader['byteOffset']).toBe(0);
		expect(reader['memoryBits']).toBe(0n);
		expect(reader['memoryData']).toBe(0n);
	});

	describe('readBit', () => {
		test('GIVEN a single bit THEN reads in the correct order', () => {
			const reader = new UnalignedBufferReader(new Uint8Array([0b1000_0000]));

			expect(reader.readBit()).toBe(1n);
			expect(reader['byteOffset']).toBe(1);
			expect(reader['memoryBits']).toBe(7n);
			expect(reader['memoryData']).toBe(0n);

			for (let i = 0; i < 7; ++i) {
				expect(reader.readBit()).toBe(0n);
			}

			expect(reader['memoryBits']).toBe(0n);
			expect(reader['memoryData']).toBe(0n);
		});
	});

	describe('readBit2', () => {
		test('GIVEN a single bit THEN reads in the correct order', () => {
			const reader = new UnalignedBufferReader(new Uint8Array([0b1000_0000]));

			expect(reader.readBit2()).toBe(0b10n);
			expect(reader['byteOffset']).toBe(1);
			expect(reader['memoryBits']).toBe(6n);
			expect(reader['memoryData']).toBe(0n);

			for (let i = 0; i < 3; ++i) {
				expect(reader.readBit2()).toBe(0n);
			}

			expect(reader['memoryBits']).toBe(0n);
			expect(reader['memoryData']).toBe(0n);
		});
	});

	describe('readBit4', () => {
		test('GIVEN a single bit THEN reads in the correct order', () => {
			const reader = new UnalignedBufferReader(new Uint8Array([0b1000_0000]));

			expect(reader.readBit4()).toBe(0b1000n);
			expect(reader['byteOffset']).toBe(1);
			expect(reader['memoryBits']).toBe(4n);
			expect(reader['memoryData']).toBe(0n);

			expect(reader.readBit4()).toBe(0n);
			expect(reader['memoryBits']).toBe(0n);
			expect(reader['memoryData']).toBe(0n);
		});
	});

	describe('readBit8', () => {
		test('GIVEN a single bit THEN reads in the correct order', () => {
			const reader = new UnalignedBufferReader(new Uint8Array([0b1000_0000]));

			expect(reader.readBit8()).toBe(0b1000_0000n);
			expect(reader['byteOffset']).toBe(1);
			expect(reader['memoryBits']).toBe(0n);
			expect(reader['memoryData']).toBe(0n);
		});
	});
});
