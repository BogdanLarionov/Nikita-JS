// var g;
// var a = 1;
// let b = 2;
// b = 5;
// const c = 3;
// c = 10;

// const pi = 3.141592;

// var a = 19;
// {
//            b = 44;
//           console.log("First call", b);

// }
// console.log("Second call", b);
// ====================
for (let i = 0; i < 5; i++) {}

for (let i = 0; i < 10; i++) {}
// ====================

// Тип данных
let a = 5;
let b = 5.33;
let veryBigNumber = 5_000_000_000; //bigInt

// tofixed - округляет число и возвразает строку "12.23"
(12.2333432434).toFixed(2); // 12.23

// toPrecision -> сколько цифр в итоговом числе
(12.3242343242).toPrecision(2); // 12
(12.3242343242).toPrecision(3); // 12.3
(12.3242343242).toPrecision(3); // 1.2e+4

// toExponential -> сколько цифр после точки
(12.3456789).toExponential(2); // 1.24e+1
(12.3456789).toExponential(3); //1.235e+1
// ====================

// Функция round, должна округлить число до 2 знака
// после запятой если необходимо

function round(n) {
  if ((n * 10) % 1 === 0) {
    return n + "";
  } else {
    return n.toFixed(2);
  }
}

console.log(round(10));
console.log(round(10.1));
console.log(round(10.12));
console.log(round(10.127));

const a = parsInt("12.3", 10); //12    преобразует из строки в число и округляет
const b = parseFloat("12.3", 10); //12.3  преобразует из строки в число и остаток дробь

Math.min(12, 48); // 12
Math.max(12, 48); // 48
Math.round(12, 345); // 12
Math.round(12, 89); // 13
Math.ceil(12, 1); // 13
Math.floor(12, 89); // 12

// Функция divide принимает два числа
// Возвращает остаток от деления большего на меньшее

function divide(num1, num2) {
  if (num1 > num2) {
    return a % b;
  } else {
    return b % a;
  }
}
// ===================
function divide(num1, num2) {
  return Math.max(num1, num2) % Math.min(num1, num2);
}

console.log(divide(3, 5));
console.log(divide(5, 3));
console.log(divide(5, 5));
console.log(divide(-5, 5));

// ===================
// строки

const a = "some string";

const substring = "substring";
const str = `Here's ${substring}`;

const char = str[2]; // 'r'
str[2] = "1";
console.log(str);

const sicedStr = str.slice(0, 6); // "here's"

console.log("original: ", str);
console.log("sliced: : ", sicedStr);

// split + join
// toUpperCase (MAMA)/ toLowerCase (mama)

// ===================

// Функция checkForFox принимает строку
// Возвращает true если в строке есть слово fox
// Возвращает false если нет

function check(str) {
  // 'tiny-tiny little fox'
  const arr = str.split(" "); // ['tiny-tiny', 'little', 'fox'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === "fox") {
      return true;
    }
  }
  return false;
}

console.log(check("tiny-tiny little fox"));

// ====================

const str = "Hello, worlld";
// str.includes('ll');
console.log(str.includes("ll")); //true
console.log(str.includes("g")); //false

const example = "tiny-tiny little fox";
console.log(example.includes("fox"));
console.log(example.includes("fox"));

console.log(example.includes("I love to foxtrot dance!".includes("fox"))); //

console.log(str.startsWith("Hello")); //true
console.log(str.endsWith("word!")); //true

console.log(str.indexOf("worlld")); // 7
console.log(str.indexOf("LL")); //2

console.log(str.lastIndexOf("LL")); //10
// ------------------------------------------

// функция findAllMatches принимает 2 аргумента
// первый - текст, второй - подстрока
// возвращает массив с индексами всех вхождений

function findAllMatches(str, substr) {
  // str = "Hello test_test_test_test" substr = "test" => [6, 11, 16, 21]
  const res = [];

  let stringCopy = str;
  let delta = 0;
  while (stringCopy.includes(substr)) {
    let firstMatch = stringCopy.indexOf(substr); // 6

    stringCopy = stringCopy.slice(firstMatch + substr.length);
    res.push(firstMatch + delta);
    delta += firstMatch + substr.length;
  }

  return res;
}

console.log(findAllMatches("Hello test_test_test_test", "test"));



const str = "Hello, worlld!";
console.log(str.replace("ll", "!!"));
console.log("original: ", str);