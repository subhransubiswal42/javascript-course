  let score = "Subhransu"

  console.log(typeof score);
  console.log(typeof(score));

  let valueInNumber = Number(score)
  console.log(typeof valueInNumber);
  console.log(valueInNumber); //NaN


// /*"33" => 33
// "33abc" => NaN
// true => 1; false => 0 */

 let isLoggedIn = "Sinu"

 let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log(booleanIsLoggedIn);

// /* 1 => true
//  0 => false
//  "" => false
//  "sinu" => true
//  null => false
//  undefined => false
//  " " => true */

 let someNumber = 33

 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);

// **************************** Operations **********************************

let value = 3
let negvalue = -value
console.log(negvalue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello "
let str2 = "Sinu"
let str3 = str1 + str2
console.log(str3); // Hello Sinu

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log((3 + 4) * 5 % 3);   //Don't do this 

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2


let gameCounter = 100
gameCounter++
console.log(gameCounter);
gameCounter--
console.log(gameCounter);

// Link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion