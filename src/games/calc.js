const win = (userName) => {
  const message = `Congratulation ${userName}! You win!`;
  return message;
};

const right = () => {
  const message = 'Correct!';
  return message;
};

const wrong = (userName, answer) => {
  const message = `It's wrong answer. Right answer was ${answer} `;
  return message;
};

const rules = () => {
  const message = 'What is the result of expression?';
  return message;
};

const expr = () => {
  const rand = Math.floor(Math.random() * 10) % 3;
  switch (rand) {
    case 0: {
      const str = {
        func: (x, y) => x + y,
        string: '+',
      };
      return str;
    }
    case 1: {
      const str = {
        func: (x, y) => x - y,
        string: '-',
      };
      return str;
    }
    case 2: {
      const str = {
        func: (x, y) => x * y,
        string: '*',
      };
      return str;
    }
    default: {
      return 0;
    }
  }
};

const question = () => {
  const n1 = Math.floor(Math.random() * 100) % 20;
  const n2 = Math.floor(Math.random() * 100) % 20;
  const expression = expr();
  const quest = `${n1} ${expression.string} ${n2} `;
  const ans = expression.func(n1, n2);
  const str = {
    question: quest,
    answer: ans,
  };
  return str;
};

export default () => {
  const str = {
    attempt: 3,
    winMessage: win,
    rightMessage: right,
    wrongMessage: wrong,
    rulesMessage: rules,
    questionAnswer: question,
  };
  return str;
};
