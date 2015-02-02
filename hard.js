// Consider the following code fragment

var a = "3";
var b = 2;
var c = b + a;


// Q: What is the value of c?
// A: 23


// Write to the best if your understanding
// why c is the value that it is.
// 
// A: var A is a string (considered text), and var b is a number. 
// When concatenated, the number 2 from var b is placed right next to the string "3" (because there is no space [" "]).
// So even though the value is 23, it shouldn't be considered the same as the number twenty-three.



var str = "Version " + 5 + 1;


// Q: What is the value of str?
// A: Version 51

// Write to the best if your understanding
// why str is the value that it is. How could
// it be altered to result in 6 instead of 51?
//
// A: Because str contains text, it is interpreted as a text string. This means that the "+" concatenates
// instead of performing addition, causing the numbers 5 and 1 to be displayed right against each other.
// Here's how you would make the value equal Version 6: var str = "Version " + (5 + 1);
