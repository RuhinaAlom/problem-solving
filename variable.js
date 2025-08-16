let a = 5;
let b = 10;

console.log("Before swap: a =", a, "b =", b);
a = a + b;
b = a - b;
a = a - b;
console.log("After swap: a =", a, "b =", b);

//Convert Celsius fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(celsius + " c is equal to " + fahrenheit + " F");


// Check if a number is Even or odd

let num = 7;
if (num % 2 === 0) {
    console.log(num + "is even");

}
else {
    console.log(num + " is odd");
}

// find maximum of two numbers

let x = 15;
let y = 20;


let max;
if (x > y) {
    max = x;

}
else {
    max = y;
}
console.log("Maximum number is: " + max);

//using the ternary operator ?
let num1 = 50;
let num2 = 170;
console.log("Before swap: num1 =", num1, "num1 =", num2);
let maximun = (num1 > num2) ? num1 : num2;

console.log("Maximum number is: ", maximun); 