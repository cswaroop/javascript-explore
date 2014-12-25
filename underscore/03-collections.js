var _ = require('underscore-contrib');

console.log('------------ _.each --------------------');
// Lets try Hello World from a functional world

_.each(["Hello", "World"], console.log);
_.each({one: 1, two: 2, three: 3}, console.log);

console.log('-------------- _.map   -----------------');
//node hello-world.js 
//Hello 0 [ 'Hello', 'World' ]
//World 1 [ 'Hello', 'World' ]

// _.each called console.log with three arguments (element, index, list)


_.map(["Hello", "World"], console.log);
_.map({one: 1, two: 2, three: 3}, console.log);

// _.map called console.log with three arguments (value, key, list)

console.log('------reduce/inject/foldl --------------');

var sum = _.reduce([1,2,3], function(memo, num) { return memo+num;}, 0);
console.log(sum);


console.log('---------- reduceRight/foldr -----------');

var list = [[0, 1], [2, 3], [4, 5]];
console.log(list);
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
console.log(flat);

console.log('------------- _.find -------------------');
var even = _.find([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});
console.log(even);

console.log('------------- _.filter -----------------');

