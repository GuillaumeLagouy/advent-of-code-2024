const utils = require('../../utils.ts');

const result = utils.readFile('./input.txt');
result.then((data: string) => {
  // Process input
  const regex = /\d+/g;
  const numbers = data.match(regex).map(Number);
  const arr1: number[] = [];
  const arr2: number[] = [];
  numbers.forEach((number, index) => {
    if (index % 2 === 0) {
      arr1.push(number);
    } else {
      arr2.push(number);
    }
  });

  // Part 1
  const typedArr1 = Float32Array.from(arr1).sort();
  const typedArr2 = Float32Array.from(arr2).sort();
  let sum1 = 0;

  typedArr1.forEach((number, index) => {
    sum1 += getDistance(number, typedArr2[index]);
  });
  console.log(sum1);

  // Part 2
  let sum2 = 0;
  arr1.forEach((number) => {
    sum2 += number * getOccurence(number, arr2);
  });
  console.log(sum2);
});

function getDistance(a: number, b: number): number {
  return Math.abs(a - b);
}

function getOccurence(a: number, array: number[]): number {
  return array.filter((number) => number === a).length;
}
