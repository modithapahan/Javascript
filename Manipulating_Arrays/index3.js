/* Splicing */
var myArray1 = [1,2,3,4,5,6,7,8,9];
var splice = myArray1.splice(0,3);

console.log(splice);

// ----------------------------------------------------

/* Exercise */
var myArray = [true, "What is the meaning of life?"];

myArray.push(42);
myArray.shift();

console.log(myArray[0]);
console.log(myArray[1]);
