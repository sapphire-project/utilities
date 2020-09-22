// TypeScript port of Serenity's standard framework buckets.
// Licensed to the Serenity Contributors under one or more agreements.
// The Serenity Contributors licenses this file to you under the ISC license.
// https://github.com/serenity-rs/serenity/blob/current/src/framework/standard/structures/buckets.rs

/**
 * An entry in the bucket.
 */
export interface BucketEntry {
	lastTime: number;
	setTime: number;
	tickets: number;
}

/**
 * The bucket limits.
 */
export interface BucketLimit {
	/**
	 * The time between tickets.
	 *
	 * If timespan is zero, there will be no spacing between usages, this means
	 * that a 5/5s bucket ({@link BucketLimit#limit Limit} of 5 in 5 seconds
	 * {@link Bucket#delay delay}) will accept 5 requests, then will wait for
	 * the remaining time.
	 *
	 * However, if in the previous example, this is set to 1 second, this will
	 * then space the requests evenly to 1 request per second until the bucket
	 * is consumed.
	 * @default 0
	 */
	timespan: number;

	/**
	 * The maximum amount of tickets.
	 *
	 * This limits the amount of requests that can be made within the
	 * {@link Bucket}'s {@link Bucket#delay delay}.
	 * @default 1
	 */
	maximum: number;
}

/**
 * The Bucket that handles ratelimits.
 */
export class Bucket<T> {
	/**
	 * The amount of milliseconds entries last.
	 */
	public delay = 0;

	/**
	 * The bucket limits. If set to null, the requests will be limited to one
	 * request per {@link delay} milliseconds.
	 */
	public limit: BucketLimit = { timespan: 0, maximum: 1 };

	/**
	 * The bucket entries for the instance.
	 */
	private entries = new Map<T, BucketEntry>();

	/**
	 * Sets the delay for the bucket.
	 * @param delay The delay to be set.
	 */
	public setDelay(delay: number): this {
		this.delay = delay;
		return this;
	}

	/**
	 * Sets the limit for the bucket.
	 * @param limit The limit to be set.
	 */
	public setLimit({ maximum: limit = 1, timespan = 0 }: BucketLimit): this {
		this.limit = { maximum: limit, timespan };
		return this;
	}

	/**
	 * Retrieves the amount of time needed for the bucket to unlock.
	 * @param id The ID of the entry to check.
	 * @returns Always a positive number, 0 if there is no delay.
	 */
	public take(id: T): number {
		const now = Date.now();
		const entry = this.getEntry(id);

		// If there is a limit:
		if (this.limit.maximum > 1) {
			const { timespan, maximum } = this.limit;
			// Then check whether tickets reach said limit:
			if (entry.tickets + 1 > maximum) {
				// If the entry is new, setTime is initialized as 0, but also,
				// if the duration yields a negative number (expired limit),
				// then it must fall-back to setting tickets as 0, setTime as
				// now, and fall-back to the delay checking.
				if (entry.setTime !== 0) {
					const duration = now - entry.setTime + timespan;
					if (duration > 0) return duration;
				}

				entry.tickets = 0;
				entry.setTime = now;
			}
		}

		// If the entry is new, lastTime is initialized as 0, but also, if the
		// duration yields a negative number (expired delay), then it must
		// fall-back into increasing tickets by one and lastTime as now.
		if (entry.lastTime !== 0) {
			const duration = now - entry.lastTime + this.delay;
			if (duration > 0) return duration;
		}

		++entry.tickets;
		entry.lastTime = now;

		// The entry wasn't either limited nor has an applicable delay, return 0.
		return 0;
	}

	/**
	 * Cleans the bucket's unlocked requests.
	 */
	public clean(): void {
		const minimum = Date.now() - this.delay;
		for (const [key, value] of this.entries.entries()) {
			if (value.lastTime >= minimum) this.entries.delete(key);
		}
	}

	private getEntry(id: T): BucketEntry {
		const entry = this.entries.get(id);
		if (entry) return entry;

		const data: BucketEntry = { lastTime: 0, setTime: 0, tickets: 0 };
		this.entries.set(id, data);
		return data;
	}
}
