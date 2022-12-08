export type Payload = string[];
export type Solution = any;
export type SolutionFunction = (payload: Payload) => Solution;
export interface SolutionFile {
  chall1: SolutionFunction,
  chall2: SolutionFunction,
}