import {Payload, Solution} from '../../types';


export function chall1(payload: Payload): Solution {
	let parseState = -1;
	const stackState: string[][] = [];
	for (const line of payload) {
		if (!line) {
			parseState = 1;
			continue;
		}

		if (parseState <=0) {
			if (line.startsWith(' 1 ')) continue;
			for (let index = 1; index < line.length; index+=4) {
				if (parseState == -1) stackState.push([]);
				if (line[index] !== ' ') stackState[(index-1)/4].unshift(line[index]);
			}
			parseState = 0;
			continue;
		}

		const command = line.split(' ');
		for (let i = 0; i < parseInt(command[1]); i++) {
			stackState[parseInt(command[5])-1]
				.push(stackState[parseInt(command[3])-1].pop());
		}
	}

	let topElements = '';
	for (const currentStack of stackState) {
		topElements += currentStack.pop();
	}

	return topElements;
}

export function chall2(payload: Payload): Solution {
	let parseState = -1;
	const stackState: string[][] = [];
	for (const line of payload) {
		if (!line) {
			parseState = 1;
			continue;
		}

		if (parseState <=0) {
			if (line.startsWith(' 1 ')) continue;
			for (let index = 1; index < line.length; index+=4) {
				if (parseState == -1) stackState.push([]);
				if (line[index] !== ' ') stackState[(index-1)/4].unshift(line[index]);
			}
			parseState = 0;
			continue;
		}

		const command = line.split(' ');
		const craneStack = [];
		for (let i = 0; i < parseInt(command[1]); i++) {
			craneStack.push(stackState[parseInt(command[3])-1].pop());
		}
		craneStack.reverse();
		stackState[parseInt(command[5])-1].push(...craneStack);
	}

	let topElements = '';
	for (const currentStack of stackState) {
		topElements += currentStack.pop();
	}

	return topElements;
}
