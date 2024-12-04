export {};
import { readFile } from '../../utils';
const input = await readFile('./input.txt');

const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)/g;
const matches = input.match(regex);

let isEnabled = true;
let result: number = 0;

matches?.forEach((instruction) => {
  if (instruction === "don't()") {
    isEnabled = false;
  } else if (instruction === 'do()') {
    isEnabled = true;
  } else {
    if (isEnabled) {
      result += extractNumber(instruction)[0] * extractNumber(instruction)[1];
    }
  }
});
console.log(result);

function extractNumber(string: string): number[] {
  const regex = /\d{1,3}/g;
  return string.match(regex)!.map(Number);
}
