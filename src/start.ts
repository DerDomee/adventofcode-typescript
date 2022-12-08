#!ts-node
import yargs from 'yargs';
import fs from 'fs/promises';
import axios from 'axios';
import config from './config';
import { SolutionFile } from './types';
export default async () => {
	const argv = await yargs
		.option('day', {
			alias: 'd',
			description: 'Day of month of december to run the challenge on. Uses current day if not provided.',
			requiresArg: false,
			default: new Date().getUTCDate(),
			type: 'number',
		})
		.option('year', {
			alias: 'y',
			description: 'Year to run the challenges on. Uses current year if not provided.',
			requiresArg: false,
			default: new Date().getUTCFullYear(),
			type: 'number',
		})
		.option('only', {
			alias: 'o',
			description: 'Only run first or second subchallenge. Set to 0 to run all challenges.',
			requiresArg: false,
			default: 0,
			choices: [0, 1, 2],
		})
		.help()
		.alias('help', 'h')
		.argv;

	let challengeContent = '';
	try {
		challengeContent = await fs.readFile(
			`./challenges/${argv.year}/${argv.day}.txt`, {
			encoding: 'utf-8',
		});
	} catch (err) {
		challengeContent = (await axios.get(
			`https://adventofcode.com/${argv.year}/day/${argv.day}/input`,
			{
				headers: {
					Cookie: `session=${config.loginCookie}`,
				}
			},
		)).data;
		await fs.mkdir(
			`./challenges/${argv.year}`,
			{
				recursive: true,
			}
		);
		await fs.writeFile(
			`./challenges/${argv.year}/${argv.day}.txt`, challengeContent,
			{
				encoding: 'utf-8',
			}
		);
	}
	try {
		const solution: SolutionFile = await import(`./solutions/${argv.year}/${argv.day}`);
		if (!solution.chall1 || !solution.chall2) {
			console.log(`Solution file ${argv.year}/${argv.day} does not export necessary functions!`);
			return;
		}

		console.log(solution.chall1(challengeContent.split('\n')));
		console.log(solution.chall2(challengeContent.split('\n')));
	} catch (err) {
		console.log(`Solution file for ${argv.year}/${argv.day} does not exist or can not be read!`);
		console.error(err);
	}
}


// Check if file for use year/day exists.
// If yes, load it and run the solution file
// If file does not exist, download from
// https://adventofcode.com/<year>/day/<day>/input