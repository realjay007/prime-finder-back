export function isPrime(num: number): boolean {
	for (let i = 2, stop = Math.sqrt(num); i <= stop; ++i) {
		if (num % i === 0) return false;
	}
	return num > 1;
}

export function findNextLowerPrime(num: number): number {
	for (let i = num - 1; i > 1; --i) {
		if (isPrime(i)) return i;
	}
	throw new Error(`Unable to find next lower prime for ${num}`);
}