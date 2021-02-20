/**
 * Problem 3
 * https://projecteuler.net/problem=3
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */
/**
 * Recursion will kill you.
 */
import {List} from "immutable";


const wtf = 600851475143;
const wtfSqrtFloor = Math.floor(Math.sqrt(600851475143));

function getFactors (num: number): List<number> {
	const sqrt: number = Math.floor(Math.sqrt(num));
    let smallFactors = List<number>();
    let largeFactors = List<number>();
	for (let i = 3; i < sqrt; i += 2) {
		const result = num / i;
		if (Number.isInteger(result)) {
            largeFactors = largeFactors.unshift(result);
            smallFactors = smallFactors.push(i);
        }
	}
    return smallFactors.concat(largeFactors);
}

export default function solution (): number {
    const factors = getFactors(wtf);
    return factors.findLast((factor: number) => getFactors(factor).size === 0);
}
