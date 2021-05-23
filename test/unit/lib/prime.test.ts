import should from "should";
import { findNextLowerPrime, isPrime } from "../../../src/lib/prime";

describe('lib/prime', () => {
	describe('isPrime', () => {
		it('should return true when passed number is prime', () => {
			const primes = [2, 3, 5, 7, 11, 13];
			for (const prime of primes) {
				should(isPrime(prime)).true();
			}
		});

		it('should return false when passed number is not prime', () => {
			const nonPrimes = [1, 4, 6, 8, 9, 10];
			for (const nonPrime of nonPrimes) {
				should(isPrime(nonPrime)).false();
			}
		});
	});

	describe('findNextLowerPrime', () => {
		it('should return highest prime number lower than the input number', () => {
			const numbersAndResults = [
				[55, 53],
				[3, 2],
				[5, 3],
				[70, 67],
				[1234567890, 1234567811],
			];
			for (const [number, result] of numbersAndResults) {
				should(findNextLowerPrime(number)).eql(result);
			}
		});

		it('should throw error if invalid input is passed', () => {
			should(() => findNextLowerPrime(2)).throwError('Unable to find next lower prime for 2');
		});
	});
});
