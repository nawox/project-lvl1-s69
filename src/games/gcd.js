const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (x <= 0 || y <= 0) {
    return x + y;
  }
  if (x > y) {
    return gcd(x % y, y);
  }
  return gcd(x, y % x);
};

const question = () => {
  const n1 = Math.floor(Math.random() * 100) + 1;
  const n2 = Math.floor(Math.random() * 100) + 1;

  const quest = `${n1} ${n2}`;
  const ans = String(gcd(n1, n2));

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
