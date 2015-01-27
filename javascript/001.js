// Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
'use strict';

// このあたりを一行でどうにか書きたい
var num_list = [], i;
for(i = 1; i < 1000; i++) {
  num_list.push(i);
}

console.log(num_list.map(function(current){
  if (current % 3 === 0 || current % 5 === 0) {
    return current;
  }
  return 0;
}).reduce(function(prev, current){
  return prev + current;
}));

// node javascript/001.js  0.04s user 0.02s system 91% cpu 0.064 total
