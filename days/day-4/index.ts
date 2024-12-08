export {};
import { readFile } from '../../utils';

const data = await readFile('./input.txt');
const array2D: string[][] = data.split('\n').map((row) => row.split(''));

let xmasCount = 0;
for (let y = 0; y < array2D.length; y++) {
  for (let x = 0; x < array2D[y].length; x++) {
    const params = [x, y, array2D];
    if (checkHorizontal.apply(null, params)) {
      xmasCount++;
    }
    if (checkVertical.apply(null, params)) {
      xmasCount++;
    }
    if (checkDiagLeft.apply(null, params)) {
      xmasCount++;
    }
    if (checkDiagRight.apply(null, params)) {
      xmasCount++;
    }
  }
}
console.log(xmasCount);

function checkHorizontal(x: number, y: number, array: string[][]): boolean {
  if (
    array[y][x] === 'X' &&
    array[y][x + 1] === 'M' &&
    array[y][x + 2] === 'A' &&
    array[y][x + 3] === 'S'
  ) {
    return true;
  } else if (
    array[y][x] === 'S' &&
    array[y][x + 1] === 'A' &&
    array[y][x + 2] === 'M' &&
    array[y][x + 3] === 'X'
  ) {
    return true;
  }
  return false;
}

function checkVertical(x: number, y: number, array: string[][]): boolean {
  if (
    array[y][x] === 'X' &&
    array[y + 1]?.[x] === 'M' &&
    array[y + 2]?.[x] === 'A' &&
    array[y + 3]?.[x] === 'S'
  ) {
    return true;
  } else if (
    array[y][x] === 'S' &&
    array[y + 1]?.[x] === 'A' &&
    array[y + 2]?.[x] === 'M' &&
    array[y + 3]?.[x] === 'X'
  ) {
    return true;
  }
  return false;
}

function checkDiagRight(x: number, y: number, array: string[][]): boolean {
  if (
    array[y][x] === 'X' &&
    array[y + 1]?.[x + 1] === 'M' &&
    array[y + 2]?.[x + 2] === 'A' &&
    array[y + 3]?.[x + 3] === 'S'
  ) {
    return true;
  } else if (
    array[y][x] === 'S' &&
    array[y + 1]?.[x + 1] === 'A' &&
    array[y + 2]?.[x + 2] === 'M' &&
    array[y + 3]?.[x + 3] === 'X'
  ) {
    return true;
  }
  return false;
}

function checkDiagLeft(x: number, y: number, array: string[][]): boolean {
  if (
    array[y][x] === 'X' &&
    array[y + 1]?.[x - 1] === 'M' &&
    array[y + 2]?.[x - 2] === 'A' &&
    array[y + 3]?.[x - 3] === 'S'
  ) {
    return true;
  } else if (
    array[y][x] === 'S' &&
    array[y + 1]?.[x - 1] === 'A' &&
    array[y + 2]?.[x - 2] === 'M' &&
    array[y + 3]?.[x - 3] === 'X'
  ) {
    return true;
  }
  return false;
}
