const rule = 'What number is missing in this progression?';

const rand = () => Math.floor(Math.random() * 10);


const progression = () => {
  const begin = rand();
  const base = rand();
  const pos = rand();
  const arr = new Array(10).join('0').split('');
  const seqArr = arr.reduce((acc) => {
    acc.push(acc[acc.length - 1] + base);
    return acc;
  }, [begin]);
  const numb = seqArr[pos];
  seqArr[pos] = '..';
  const str = {
    number: numb,
    sequence: seqArr.join(' '),
  };
  return str;
};

const question = () => {
  const progress = progression();
  const quest = progress.sequence;
  const ans = progress.number;
  const str = {
    question: quest,
    answer: ans,
  };
  return str;
};

export default () => {
  const gameRules = {
    questionAnswer: question,
    ruleMessage: rule,
  };
  return gameRules;
};
