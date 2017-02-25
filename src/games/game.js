import { ask, greetings } from '..';
import evenRules from './even';
import calcRules from './calc';

const round = (attempt, rules, userName) => {
  if (attempt === 0) {
    console.log(rules.winMessage(userName));
    return 0;
  }
  const quest = rules.questionAnswer();
  const userAnswer = ask(quest.question);
  if (String(userAnswer) !== String(quest.answer)) {
    console.log(rules.wrongMessage(userName, quest.answer));
    return 0;
  }
  console.log(rules.rightMessage(userName));
  round(attempt - 1, rules, userName);
  return 0;
};

const basic = (rules) => {
  greetings();
  console.log(rules.rulesMessage());
  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  round(rules.attempt, rules, userName);
};

export default (gameName) => {
  switch (gameName) {
    case 'even': {
      basic(evenRules());
      break;
    }
    case 'calc': {
      basic(calcRules());
      break;
    }
    default: {
      const userName = ask('May I have your name? ');
      console.log(`Hello, ${userName}!`);
    }
  }
};
