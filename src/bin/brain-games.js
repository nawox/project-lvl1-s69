#!/usr/bin/env nodejs
import { ask, greetings } from '..';

greetings();
const ans = ask('May I have your name? ');
console.log(`Hello, ${ans}!`);
