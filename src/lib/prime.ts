export function isPrime(num: number): boolean {
	if (num < 2) return false;
	if (num === 2) return true;
	if (num % 2 === 0) return false;

	for (let i = 3, stop = Math.sqrt(num); i <= stop; i+=2) {
		if (num % i === 0) return false;
	}
	return true;
}

export function findNextLowerPrime(num: number): number {
	for (let i = num - 1; i > 1; --i) {
		if (isPrime(i)) return i;
	}
	throw new Error(`Unable to find next lower prime for ${num}`);
}
