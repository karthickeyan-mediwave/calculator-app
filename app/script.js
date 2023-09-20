let clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  form1.answer.value = "";
});

let seven = document.querySelector("#seven");
seven.addEventListener("click", function () {
  form1.answer.value += "7";
});
let eight = document.querySelector("#eight");
eight.addEventListener("click", function () {
  form1.answer.value += "8";
});
let nine = document.querySelector("#nine");
nine.addEventListener("click", function () {
  form1.answer.value += "9";
});
let four = document.querySelector("#four");
four.addEventListener("click", function () {
  form1.answer.value += "4";
});
let five = document.querySelector("#five");
five.addEventListener("click", function () {
  form1.answer.value += "5";
});
let six = document.querySelector("#six");
six.addEventListener("click", function () {
  form1.answer.value += "6";
});
let one = document.querySelector("#one");
one.addEventListener("click", function () {
  form1.answer.value += "1";
});
let two = document.querySelector("#two");
two.addEventListener("click", function () {
  form1.answer.value += "2";
});
let three = document.querySelector("#three");
three.addEventListener("click", function () {
  form1.answer.value += "3";
});
let zero = document.querySelector("#zero");
zero.addEventListener("click", function () {
  form1.answer.value += "3";
});

let divide = document.querySelector("#divide");
divide.addEventListener("click", function () {
  form1.answer.value += "/";
});
let subtract = document.querySelector("#subtract");
subtract.addEventListener("click", function () {
  form1.answer.value += "-";
});
let addition = document.querySelector("#addition");
addition.addEventListener("click", function () {
  form1.answer.value += "-";
});
let multiply = document.querySelector("#multiply");
multiply.addEventListener("click", function () {
  form1.answer.value += "*";
});
let total = document.querySelector("#total-answer");
total.addEventListener("click", function () {
  form1.answer.value = eval(form1.answer.value);
});
