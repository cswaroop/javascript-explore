var _ = require('underscore-contrib');

console.log("--------------------------------");

console.log("------ first -------------------");
var first = _.first([1,2,3,4,5]);
console.log(first);

console.log("------ initial -----------------");
var initial = _.initial([1,2,3,4,5]);
console.log(initial);

console.log("--------- last -----------------");
var last = _.last([1,2,3,4,5,6]);
console.log(last);

console.log("--------rest--------------------");
var rest = _.rest([1,2,3,4,5]);
console.log(rest);

console.log("------- compact ----------------");
var compact = _.compact([0,1, false, 2, '', 3]);
console.log(compact);

console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
