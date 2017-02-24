#!/usr/bin/env nodejs
import ask from '..';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const getUserName = () => {
  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
