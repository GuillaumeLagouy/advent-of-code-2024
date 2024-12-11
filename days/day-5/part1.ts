export {};
import { readFile } from '../../utils';

type Rule = {
  page: number;
  before: number[];
};

type RuleList = Map<number, Rule>;

const emptyLineRegex = /\n\s*\n/;
const input = await readFile('./input.txt');
const pageOrderingRules: string[] = input.split(emptyLineRegex)[0].split('\n');
const ruleList = buildRules(pageOrderingRules);

const updateSequences: number[][] = input
  .split(emptyLineRegex)[1]
  .split('\n')
  .map((e) => e.split(',').map(Number));

const result = updateSequences
  .map((seq) => checkSequence(seq))
  .reduce((a, b) => a + b);
console.log(result);

function buildRules(input: string[]): RuleList {
  const ruleList: RuleList = new Map();
  input.forEach((unformattedRule) => {
    const [page, before]: number[] = unformattedRule.split('|').map(Number);
    addTo(page, before, ruleList);
  });
  return ruleList;
}

function addTo(id: number, element: number, ruleList: RuleList): void {
  const target = ruleList.get(id);
  if (target === undefined) {
    ruleList.set(id, { page: id, before: [element] });
  } else {
    target.before.push(element);
  }
}

function checkSequence(seq: number[]): number {
  let isCorrect = true;
  for (let index = 1; index < seq.length; index++) {
    const currentPage = ruleList.get(seq[index]);
    if (currentPage !== undefined && isCorrect === true) {
      const previousPage = seq[index - 1];
      isCorrect = currentPage.before.includes(previousPage) ? false : true;
    }
  }

  return isCorrect ? seq[(seq.length - 1) / 2] : 0;
}
