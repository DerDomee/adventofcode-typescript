import { Payload, Solution } from "../../types";

const scoreMatrix = [
      /*  X  Y  Z */
/* A */  [4, 8, 3],
/* B */  [1, 5, 9],
/* C */  [7, 2, 6],
];

const reverseMatrix = [
      /*  X  Y  Z */
/* A */  [2, 0, 1],
/* B */  [0, 1, 2],
/* C */  [1, 2, 0],
]

export function chall1(payload: Payload): Solution {
  let totalScore = 0
  for (const line of payload) {
    if (!line) continue;
    const coordinates = line
      .replaceAll(/A|X/g, '0')
      .replaceAll(/B|Y/g, '1')
      .replaceAll(/C|Z/g, '2')
      .split(' ').map((s) => {
        return parseInt(s);
      });
    totalScore+= scoreMatrix[coordinates[0]][coordinates[1]];
  }
  return totalScore;
}

export function chall2(payload: Payload): Solution {
  let totalScore = 0;
  for (const line of payload) {
    if (!line) continue;
    const coordinates = line
      .replaceAll(/A|X/g, '0')
      .replaceAll(/B|Y/g, '1')
      .replaceAll(/C|Z/g, '2')
      .split(' ').map((s) => {
        return parseInt(s);
      });
    const whatToPick = reverseMatrix[coordinates[0]][coordinates[1]];
    totalScore += scoreMatrix[coordinates[0]][whatToPick];
  }
  return totalScore;
}