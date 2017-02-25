#!/usr/bin/env nodejs

const rules = 'Answer "yes" if number even otherwise answer "no"';

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
    rulesMessage: rules,
    questionAnswer: question,
  };

  return gameRules;
};
