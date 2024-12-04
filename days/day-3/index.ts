export {};
import { readFile } from '../../utils';
const input = await readFile('./input.txt');

const regex = /mul\(\d{1,3},\d{1,3}\)/g;
const matches = input.match(regex);

const result = matches
  ?.map((v) => {
    return extractNumber(v)[0] * extractNumber(v)[1];
  })
  .reduce((prev, current) => prev + current, 0);

console.log(result);

function extractNumber(string: string): number[] {
  const regex = /\d{1,3}/g;
  return string.match(regex)!.map(Number);
}
