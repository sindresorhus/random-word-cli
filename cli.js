#!/usr/bin/env node
'use strict';
const meow = require('meow');
const randomWord = require('random-word');

meow(`
	Example
	  $ random-word
	  ferriferous
`);

console.log(randomWord());
