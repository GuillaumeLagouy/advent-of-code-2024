export {};
const input =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)/g;
console.log(input.match(regex));
