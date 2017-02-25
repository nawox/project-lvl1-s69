#!/usr/bin/env nodejs

const win = (userName) => {
  const message = `Congratulation ${userName}! You win!`;
  return message;
};

const right = () => {
  const message = 'Correct!';
  return message;
};

const wrong = (userName, answer) => {
  const message = `It's wrong answer. Correct answer was '${answer}'. Let's try again ${userName}`;
  return message;
};

const rules = () => {
  const message = 'Answer "yes" if number odd otherwise answer "no"';
  return message;
};

const question = () => {
  const number = Math.floor(Math.random() * 100);
  const quest = `Question: ${number} `;
  let ans = '';
  if (number % 2 === 0) {
    ans = 'yes';
  } else {
    ans = 'no';
  }
  const str = {
    question: quest,
    answer: ans,
  };
  return str;
};
export default () => {
  const gameRules = {
    attempt: 3,
    rulesMessage: rules,
    winMessage: win,
    rightMessage: right,
    wrongMessage: wrong,
    questionAnswer: question,
  };

  return gameRules;
};
