import { ask, greetings } from '..';
import evenRules from './even';
import calcRules from './calc';
import gcdRules from './gcd';
import balanceRules from './balance';

const winMessage = (userName) => {
  console.log(`Congratulation ${userName}! You win!`);
};

const rightMessage = () => {
  console.log(' Correct!');
};

const wrongMessage = (userName, answer) => {
  console.log(`It's wrong answer. Correct answer was '${answer}'. Let's try again ${userName}.`);
};

const round = (attempt, rules, userName) => {
  if (attempt === 0) {
    winMessage(userName);
    return 0;
  }
  const quest = rules.questionAnswer();
  const userAnswer = ask(`\n Question: ${quest.question} \n Your answer: `);
  if (String(userAnswer) !== String(quest.answer)) {
    wrongMessage(userName, quest.answer);
    return 0;
  }
  rightMessage();
  round(attempt - 1, rules, userName);
  return 0;
};

const basic = (rules) => {
  greetings();
  console.log(rules.ruleMessage);
  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  round(3, rules, userName);
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
    case 'gcd': {
      basic(gcdRules());
      break;
    }
    case 'balance': {
      basic(balanceRules());
      break;
    }
    default: {
      const userName = ask('May I have your name? ');
      console.log(`Hello, ${userName}!`);
    }
  }
};
