export {};
import { readFile } from '../../utils';

const data = await readFile('./input.txt');
const array2D: string[][] = data.split('\n').map((row) => row.split(''));

let xmasCount = 0;
for (let y = 1; y < array2D.length - 1; y++) {
  for (let x = 1; x < array2D[y].length - 1; x++) {
    const params = [x, y, array2D];
    if (
      array2D[y][x] === 'A' &&
      checkDiagLeft.apply(null, params) &&
      checkDiagRight.apply(null, params)
    ) {
      xmasCount++;
    }
  }
}
console.log(xmasCount);

function checkDiagLeft(x: number, y: number, array: string[][]): boolean {
  if (
    (array[y - 1]?.[x + 1] === 'M' && array[y + 1]?.[x - 1] === 'S') ||
    (array[y - 1]?.[x + 1] === 'S' && array[y + 1]?.[x - 1] === 'M')
  ) {
    return true;
  }
  return false;
}

function checkDiagRight(x: number, y: number, array: string[][]): boolean {
  if (
    (array[y - 1]?.[x - 1] === 'M' && array[y + 1]?.[x + 1] === 'S') ||
    (array[y - 1]?.[x - 1] === 'S' && array[y + 1]?.[x + 1] === 'M')
  ) {
    return true;
  }
  return false;
}
