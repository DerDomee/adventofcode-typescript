import { Payload, Solution } from "../../types";

const priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function chall1(payload: Payload): Solution {
  let prioritySum = 0;
  for (const line of payload) {
    if (!line) continue;
    const compartment1 = line.substring(0, (line.length/2));
    const compartment2 = line.substring(line.length/2, line.length);
    let duplicate = '';
    for (const item of compartment1) {
      if (compartment2.includes(item)) duplicate = item;
    }

    //console.log(line, compartment1, compartment2, duplicate);
    prioritySum += priorities.indexOf(duplicate)+1
  }
  return prioritySum;
}

export function chall2(payload: Payload): Solution {
  let prioritySum = 0;
  for (let i = 0; i < payload.length; i+=3) {
    const rucksack1 = payload[i];
    const rucksack2 = payload[i+1];
    const rucksack3 = payload[i+2];
    if(!rucksack1) continue;

    for (const item of rucksack1) {
      if (rucksack1.includes(item) && rucksack2.includes(item) && rucksack3.includes(item)) {
        prioritySum += priorities.indexOf(item)+1;
        break;
      }
    }
  }
  return prioritySum;
}