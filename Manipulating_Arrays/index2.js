/* The unshift and shift methods are similar to push and pop, only they work from the beginning of the array. We can use the push and shift methods consecutively to utilize an array as a queue. */

/* Shift */
var myQueue = [];

myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());

/* Unshift */
var myArray = [1,2,3];
myArray.unshift(10,11,'moditha','moditha');
console.log(myArray);
