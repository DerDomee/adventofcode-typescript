import { Payload, Solution } from "../../types";

function elvesCalories(payload: Payload): Solution {
  const elves = [0];
  for (const line of payload) {
    if(line.length === 0) elves.push(0);
    else elves[elves.length-1] += parseInt(line);
  }
  return elves.sort((a, b) => b-a);
}

export function chall1(payload: Payload): Solution {
  return elvesCalories(payload)[0]
}

export function chall2(payload: Payload): Solution {
  const totalCalories = elvesCalories(payload);
  return totalCalories[0] + totalCalories[1] + totalCalories[2]
}