const rule = 'Balance the given number';

const balance = (number) => {
  const numArr = String(number).split('').sort();
  const base = Number(numArr[0]);
  const surplus = numArr.reduce((acc, item) => acc + (item - base), 0);

  const whole = Math.floor(surplus / numArr.length);
  const fract = surplus % numArr.length;
  const result = numArr.reduce((acc, item, index) => {
    if (index < fract) {
      acc.push(base + whole + 1);
      return acc;
    }
    acc.push(base + whole);
    return acc;
  }, []);
  return result.sort().join('');
};

const question = () => {
  const number = Math.floor(Math.random() * 10000);
  const quest = String(number);
  const ans = String(balance(number));

  const str = {
    question: quest,
    answer: ans,
  };
  return str;
};


export default () => {
  const gameRules = {
    ruleMessage: rule,
    questionAnswer: question,
  };
  return gameRules;
};
