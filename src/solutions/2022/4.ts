import {Payload, Solution} from '../../types';

export function chall1(payload: Payload): Solution {
	let fullyContainedRanges = 0;
	for (const line of payload) {
		if (!line) continue;
		const pair = line.split(',').map((range) => {
			return range.split('-');
		}).map((range) => range.map((edge) => {
			return parseInt(edge);
		}));
		const elve1 = pair[0];
		const elve2 = pair[1];
		if (elve1[0] <= elve2[0] && elve1[1] >= elve2[1]) {
			fullyContainedRanges++;
		} else if (elve1[0] >= elve2[0] && elve1[1] <= elve2[1]) {
			fullyContainedRanges++;
		}
	}
	return fullyContainedRanges;
}

export function chall2(payload: Payload): Solution {
	let overlappingRanges = 0;
	for (const line of payload) {
		if (!line) continue;
		const pair = line.split(',').map((range) => {
			return range.split('-');
		}).map((range) => range.map((edge) => {
			return parseInt(edge);
		}));
		const elve1 = pair[0];
		const elve2 = pair[1];

		if ((elve1[0] >= elve2[0] && elve1[0] <= elve2[1]) ||
		    (elve2[0] >= elve1[0] && elve2[0] <= elve1[1])) {
			overlappingRanges++;
		}
	}
	return overlappingRanges;
}
