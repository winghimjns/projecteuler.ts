/**
 * Problem 5
 * https://projecteuler.net/problem=5
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */

/**
 * MY NOTES:
 *
 * For the reason that:
 *
 * 2 * 3 = 6
 * 2 * 4 = 8
 * 2 * 5 = 10
 * 2 * 6 = 12
 * 2 * 7 = 14
 * 2 * 8 = 16
 * 2 * 9 = 18
 * 2 * 10 = 20
 *
 * So all numbers under 20 doesn't need to be tried if it's a factor
 *
 */
const target = 20;

const targetDownOne = target - 1;
const productBase = target * targetDownOne;
const targetHalf = target >> 1;

export default function solution (): number {
    outer: for (let i = 2;; i += 2) {
        const attempt = productBase * i;
        for (let j = targetDownOne - 1; j > targetHalf; j--) {
            if (attempt % j !== 0) { continue outer; }
        }
        return attempt;
    }
}
