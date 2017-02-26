const rule = 'Answer "yes" if number even otherwise answer "no"';

const isEven = (x) => {
  if (x % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const question = () => {
  const number = Math.floor(Math.random() * 100);
  const quest = String(number);
  const ans = isEven(number);

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
