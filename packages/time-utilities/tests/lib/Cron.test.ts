import { Cron } from '../../src';

describe('Cron', () => {
	test('pre-defined @hourly', () => {
		expect.assertions(6);

		const specimine = new Cron('@hourly');

		expect(specimine.normalized).toBe('0 * * * *');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('pre-defined @daily', () => {
		expect.assertions(6);

		const specimine = new Cron('@daily');

		expect(specimine.normalized).toBe('0 0 * * *');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('pre-defined @weekly', () => {
		expect.assertions(6);

		const specimine = new Cron('@weekly');

		expect(specimine.normalized).toBe('0 0 * * 0');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0]);
	});

	test('pre-defined @monthly', () => {
		expect.assertions(6);

		const specimine = new Cron('@monthly');

		expect(specimine.normalized).toBe('0 0 1 * *');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([1]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('pre-defined @yearly', () => {
		expect.assertions(6);

		const specimine = new Cron('@yearly');

		expect(specimine.normalized).toBe('0 0 1 1 *');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([1]);
		expect(specimine.months).toEqual([1]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('pre-defined @annually', () => {
		expect.assertions(6);

		const specimine = new Cron('@annually');

		expect(specimine.normalized).toBe('0 0 1 1 *');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([1]);
		expect(specimine.months).toEqual([1]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every minute', () => {
		expect.assertions(6);

		const specimine = new Cron('* * * * *');

		expect(specimine.normalized).toBe('* * * * *');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every other minute', () => {
		expect.assertions(6);

		const specimine = new Cron('*/2 * * * *');

		expect(specimine.normalized).toBe('*/2 * * * *');
		expect(specimine.minutes).toEqual([
			0,
			2,
			4,
			6,
			8,
			10,
			12,
			14,
			16,
			18,
			20,
			22,
			24,
			26,
			28,
			30,
			32,
			34,
			36,
			38,
			40,
			42,
			44,
			46,
			48,
			50,
			52,
			54,
			56,
			58
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every seventh minute starting at the second', () => {
		expect.assertions(6);

		const specimine = new Cron('1/7 * * * *');

		expect(specimine.normalized).toBe('1/7 * * * *');
		expect(specimine.minutes).toEqual([1, 8, 15, 22, 29, 36, 43, 50, 57]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every other hour', () => {
		expect.assertions(6);

		const specimine = new Cron('* */2 * * *');

		expect(specimine.normalized).toBe('* */2 * * *');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every seventh hour starting at the second', () => {
		expect.assertions(6);

		const specimine = new Cron('* 1/7 * * *');

		expect(specimine.normalized).toBe('* 1/7 * * *');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([1, 8, 15, 22]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every other day', () => {
		expect.assertions(6);

		const specimine = new Cron('* * */2 * *');

		expect(specimine.normalized).toBe('* * */2 * *');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every seventh day starting at the second', () => {
		expect.assertions(6);

		const specimine = new Cron('* * 1/7 * *');

		expect(specimine.normalized).toBe('* * 1/7 * *');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([1, 8, 15, 22, 29]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every other month', () => {
		expect.assertions(6);

		const specimine = new Cron('* * * */2 *');

		expect(specimine.normalized).toBe('* * * */2 *');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 3, 5, 7, 9, 11]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every seventh month starting at the second', () => {
		expect.assertions(6);

		const specimine = new Cron('* * * 1/7 *');

		expect(specimine.normalized).toBe('* * * 1/7 *');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 8]);
		expect(specimine.dows).toEqual([0, 1, 2, 3, 4, 5, 6]);
	});

	test('every other day of week', () => {
		expect.assertions(6);

		const specimine = new Cron('* * * * */2');

		expect(specimine.normalized).toBe('* * * * */2');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([0, 2, 4, 6]);
	});

	test('every other day of week starting at the second', () => {
		expect.assertions(6);

		const specimine = new Cron('* * * * 1/2');

		expect(specimine.normalized).toBe('* * * * 1/2');
		expect(specimine.minutes).toEqual([
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31,
			32,
			33,
			34,
			35,
			36,
			37,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			46,
			47,
			48,
			49,
			50,
			51,
			52,
			53,
			54,
			55,
			56,
			57,
			58,
			59
		]);
		expect(specimine.hours).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([1, 3, 5]);
	});

	test('every monday through friday token at midnight', () => {
		expect.assertions(6);

		const specimine = new Cron('0 0 * * mon-fri');

		expect(specimine.normalized).toBe('0 0 * * 1-5');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
		expect(specimine.dows).toEqual([1, 2, 3, 4, 5]);
	});

	test('every friday in july at midnight', () => {
		expect.assertions(6);

		const specimine = new Cron('0 0 * jul fri');

		expect(specimine.normalized).toBe('0 0 * 7 5');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([7]);
		expect(specimine.dows).toEqual([5]);
	});

	test('every friday in july,august at midnight', () => {
		expect.assertions(6);

		const specimine = new Cron('0 0 * jul,aug fri');

		expect(specimine.normalized).toBe('0 0 * 7,8 5');
		expect(specimine.minutes).toEqual([0]);
		expect(specimine.hours).toEqual([0]);
		expect(specimine.days).toEqual([
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24,
			25,
			26,
			27,
			28,
			29,
			30,
			31
		]);
		expect(specimine.months).toEqual([7, 8]);
		expect(specimine.dows).toEqual([5]);
	});

	test('this instant', () => {
		expect.assertions(6);

		const now = new Date();
		const [min, hour, day, month, dow] = [now.getUTCMinutes(), now.getUTCHours(), now.getUTCDate(), now.getUTCMonth(), now.getUTCDay()];
		const specimine = new Cron('? ? ? ? ?');

		expect(specimine.normalized).toBe(`${min} ${hour} ${day} ${month} ${dow}`);
		expect(specimine.minutes).toEqual([min]);
		expect(specimine.hours).toEqual([hour]);
		expect(specimine.days).toEqual([day]);
		expect(specimine.months).toEqual([month]);
		expect(specimine.dows).toEqual([dow]);
	});

	test('any instant', () => {
		expect.assertions(5);

		const specimine = new Cron('h h h h h');
		const [minutes, hours, date, month, day] = specimine.normalized.split(' ').map(Number);

		expect(minutes >= 0 && minutes <= 59).toBe(true);
		expect(hours >= 0 && hours <= 23).toBe(true);
		expect(date >= 1 && date <= 31).toBe(true);
		expect(month >= 1 && month <= 12).toBe(true);
		expect(day >= 0 && day <= 6).toBe(true);
	});

	// Saturday 9th March 2019, at 16:20:35:500
	const tDate = new Date(2019, 2, 9, 16, 20, 35, 500);

	test('next minute', () => {
		const specimine = new Cron('* * * * *');
		const next = specimine.next(tDate);

		expect(next.getTime()).toBe(new Date(2019, 2, 9, 16, 21, 0, 0).getTime());
	});

	test('bad cron', () => {
		expect(() => new Cron('? ?')).toThrowError('Invalid Cron Provided');
	});
});
