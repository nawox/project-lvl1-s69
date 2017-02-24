#!/usr/bin/env nodejs
import { greetings, getUserName } from './brain-games';
import ask from '..';

const rules = () => {
  console.log('Answer "yes" if number odd otherwise answer "no"');
};

const isOdd = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const oppositeAnswer = (answer) => {
  if (answer === 'yes') {
    return 'no';
  }
  return 'yes';
};

const falseMessage = (answer) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${oppositeAnswer(answer)}"`);
};

const round = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const userAnswer = ask('Your answer: ');
  switch (userAnswer) {
    case 'yes': {
      if (isOdd(number)) {
        console.log('Correct!');
        return true;
      }
      falseMessage(userAnswer);
      return false;
    }
    case 'no': {
      if (!isOdd(number)) {
        console.log('Correct!');
        return true;
      }
      falseMessage(userAnswer);
      return false;
    }
    default: {
      console.log('Sorry, you enter impossible  answer');
      return false;
    }
  }
};

const game = (attempt, userName) => {
  if (attempt === 0) {
    console.log(`Congratulations, ${userName}!`);
    return 0;
  }
  if (!round()) {
    console.log(`Let's try again, ${userName}!`);
    return 0;
  }
  game(attempt - 1, userName);
  return 0;
};

greetings();
rules();
const userName = getUserName();
game(3, userName);
