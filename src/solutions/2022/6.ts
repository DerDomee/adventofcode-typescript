import {Payload, Solution} from '../../types';

function getDistinctMarker(signal: string, length: number) {
	let stop = length;
	while (stop < signal.length) {
		stop++;
		const buffer = signal.substring(stop-length, stop).split('');
		const bufferset = new Set(buffer);
		if (buffer.length === bufferset.size) {
			return stop;
		}
	}
}


export function chall1(payload: Payload): Solution {
	return getDistinctMarker(payload[0], 4);
}

export function chall2(payload: Payload): Solution {
	return getDistinctMarker(payload[0], 14);
}
