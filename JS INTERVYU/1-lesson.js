// Operators
// Arifmetic
// + - * / % ++ -- **

// Assignment
// = += -= *= %= **=

// Compairson
//  > < == === >= <= ? != !==

// Logical
// && || ! ?? !!

// Conditional
// 5 > 3 ? 5 : 3 '? :'

// Type Operators
// typef instanceof

// Unary
// +1 // one operator one value

// Ternary
// 1 + 1 // 2 value and one operator

// Binary
// 5 > 3 ? 5 : 3  // three operator and four value
// 5 > 3 && 5 || 3 // three operator and four value
// 5 > 3 && 5 // three value and two operator

// Syntax
// tagFunction`template literal ${myVar}`;
// Example use case
function highlight(strings, ...values) {
  let str = "";
  strings.forEach((string, i) => {
    str += `${string} <span class='hl'>${values[i] || ""}</span>`;
  });
  return str;
}
const catName = "Tom";
const catAge = 15;
const sentence = highlight`My cat's name is ${catName} and he is ${catAge} years old`;
document.body.innerHTML = sentence;
