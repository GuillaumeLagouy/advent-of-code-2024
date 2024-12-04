export {};
import { readFile } from '../../utils';

// Process input
const result = await readFile('./input.txt');
const rows: string[] = result.split('\n');
const data: number[][] = rows.map((row) => row.split(' ').map(Number));

// Part 1
let safeCount = 0;
data.forEach((row) => {
  console.log(checkProgession(row, [1, 2, 3], 1));
});
console.log(safeCount);

function isMonotonic(array: number[], allowedErrors: number): boolean {
  let increasingErrors = 0;
  let decreasingErrors = 0;

  for (let index = 1; index < array.length; index++) {
    if (array[index] > array[index - 1]) {
      decreasingErrors++;
    }
    if (array[index] < array[index - 1]) {
      increasingErrors++;
    }

    if (increasingErrors > allowedErrors && decreasingErrors > allowedErrors) {
      return false;
    }
  }
  return true;
}

// Need to be implemented
function checkProgession(
  array: number[],
  allowedDiff: number[],
  allowedErrors: number,
): boolean {
  return true;
}
