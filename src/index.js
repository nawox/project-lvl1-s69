import readlineSync from 'readline-sync';

export const ask = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};
