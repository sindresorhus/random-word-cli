#!/usr/bin/env node
import meow from 'meow';
import randomWord from 'random-word';

meow(`
	Example
	  $ random-word
	  ferriferous
`, {
	importMeta: import.meta,
});

console.log(randomWord());
