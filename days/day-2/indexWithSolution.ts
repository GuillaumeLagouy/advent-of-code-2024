/**
 * I didn't manage to do part 2 by myself so I studied the following answer :
 * https://llimllib.github.io/advent2024/02
 */

export {};
import { readFile } from '../../utils';

// Process Input
const result = await readFile('./input.txt');
const rows: string[] = result.split('\n');
const data: number[][] = rows.map((row) => row.split(' ').map(Number));

const answer1 = data
  .map((row) => row.every(decreasing) || row.every(increasing))
  .filter(Boolean).length;
console.log(answer1);

const answer2 = data
  .map((row) => everyButOne(row, decreasing) || everyButOne(row, increasing))
  .filter(Boolean).length;
console.log(answer2);

function decreasing(element: number, index: number, array: number[]) {
  return (
    index === 0 ||
    (element < array[index - 1] && array[index - 1] - element < 4)
  );
}

function increasing(element: number, index: number, array: number[]) {
  return (
    index === 0 ||
    (element > array[index - 1] && element - array[index - 1] < 4)
  );
}

function cut(array: number[], index: number) {
  return array.slice(0, index).concat(array.slice(index + 1, array.length));
}

function everyButOne(array: number[], f) {
  if (array.every(f)) return true;
  return (array as number[]).some(
    (element: number, index: number, array: number[]) =>
      cut(array, index).every(f),
  );
}
