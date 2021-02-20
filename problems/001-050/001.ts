/**
 * Problem 1
 * https://projecteuler.net/problem=1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/**
 * To calculate, we need to sum up all the multiples of 3 and 5 under 1000, then
 * minus the sum of multiples of 15 for the reason that multiples of 15 were
 * counted once more than it should.
 */

const end: number = 1000;

function sequenceSum (num: number): number {
	const count: number = Math.ceil(end / num) - 1;
	const last: number = (end - 1) - ((end - 1) % num);
	return (num + last) * count / 2;
}

export default function solution (): number {
	return sequenceSum(3) + sequenceSum(5) - sequenceSum(15);
}
