const output = document.getElementById("output");

output.innerHTML = "Hello, world!"; //вывод на экран
console.log("Hello, world!"); // вывод в консоль
// -----------------------------

// function print(text) {
//   output.innerHTML +="<div>" + text + "</div>"  ;
// }
// print("Hello world!");
// print("Еще одна строка");
// print("конец строки");
// -----------------------------

function displayTeext(text) {
  output.innerHTML += "<div>" + text + "</div>";
}

displayTeext(equalString("temp", "temp"));
displayTeext(equalString("tmp", "temp"));
displayTeext(equalString("tep", "temp"));
displayTeext(equalString("temp", "temp123"));
// -----------------------------
displayTeext("a" + "b");
displayTeext("a" + 1);
displayTeext(1 + "a");

const tmp = "tmp";
displayTeext(`a ${tmp} b`);

displayTeext(tmp[0]);
displayTeext(tmp[1]);
displayTeext(tmp.length);

// "tmp"  "tmp"
function equalString(a, b = "") {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < equalString.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function displayText(text) {
  console.log(text);
}

displayText(equalString("temp", "temp"));
displayText(equalString("tmp", "temp"));
displayText(equalString("tep", "temp"));
displayText(equalString("temp", "temp123"));
displayText(equalString("temp", ""));
// -----------------------------

displayTeext(parseInt("10abc", 10));
displayTeext(parseInt("1A", 16)); // A = 10, b = 11
displayTeext(parseInt("11", 2)); // 0 - 0, 1 - 1, 10 - 2, 11- 3, 100 - 4, 101 - 5
displayTeext(parseInt(+"10abc"));

function isNumber(char) {
  return (
    char === "0" ||
    char === "1" ||
    char === "2" ||
    char === "3" ||
    char === "4" ||
    char === "5" ||
    char === "6" ||
    char === "7" ||
    char === "8" ||
    char === "9"
  );
}
function calc(str) {
  let a = "",
    b = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let tmp = "";

    if (isNumber(char)) {
      tmp += char;
    }
    if (char === "") {
      a = tmp;
      tmp = "";
    }
    if (char === "+") {
    }
  }
  // i = 0, char = '1', tmp = ''
  // i = 1, char = '0', tmp = '1'
  // i = 2, char = ' ', tmp = '10'
  // i = 5, char = '7', tmp = '107'
}
console.log(calc("10 + 7"));

// displayTeext(calc("10 + 7")); // 17

// -----------------------------

displayTeext(+"+");
function isNumber(str) {
  return !Number.isNaN(+str);
}
displayTeext(isNumber("100")); // true
displayTeext(isNumber("10a")); //false
displayTeext(isNumber("ABC")); //false

// -----------------------------
// function Primer!

// function a(s, d) {
//   return 0;
// }

// const a = (s, d) => {
//   return 0;
// };

// const a = (s, d) => 0;

// const a = (s) => 0;
// // function Primer!

// const a = function () {
//   return 0;
// }
// -----------------------------

displayTeext("1,2,3,4,5,".split(", "));
displayTeext("13".split(", "));
displayTeext("13, ".split(", "));

displayTeext("13, ".split(", ").filter((s) => s.length !== 0));

console.log("1,2,3,4,5,".split(", ")); // привратили в мосив

console.log("13, ".split(", ").filter((s) => s.length !== 0));

console.log(["1", "2", "3"].join(", ")); // привратили в строку ('-')

// s = "13" s.length !== 0
// s = "" s.length !== 0
// -----------------------------

// formatDate принимает дату в формате 2022-09-25,
// а возвращает в формате 25/09/2022
// 1.
function formatDate(d) {
  return d.split("-").reverse().join("/");
}
displayTeext(formatDate("2022-09-25"));

// 2.
function formatDate(d) {
  const arr = d.split("-"); // [ "2022", "09", "25" ]
  return `${arr[2]}/${arr[1]}/${arr[0]}`;
  // return arr[2] + "/" + arr[1] + "/" + arr[0];
}
displayTeext(formatDate("2022-09-25"));

// -----------------------------
// wordsCount принимает предложение, возвращает
// число слов в предложении
// 1.
function wordsCount(s) {
  const arr = s.split(" ");
  // console.log("Array: ", arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 0) {
      count++;
    }
  }
  return arr.length;
}
displayText(wordsCount("Мама Мыла раму"));
displayText(wordsCount("Мама  Мыла  раму"));

// 2.
function wordsCount(s) {
  const arr = s.split(" ");
  const filteredArr = arr.filter((s) => s.length !== 0);
  return filteredArr.length;
}
displayText(wordsCount("Мама Мыла раму"));
displayText(wordsCount("Мама  Мыла  раму"));
// -----------------------------

// makePharase принемает массив слов и составляет из них предложение
function makePhrase(arr) {
  const firstWord = arr[0]; //mama
  const letterArr = firstWord.split(""); // ['m', 'a', 'm', 'a' ]
  letterArr[0] = letterArr[0].toUpperCase(); // 'm' => M
  arr[0] = letterArr.join(""); // 'Mama'
  return `${arr.join(" ")}.`;
}

displayTeext(makePhrase(["мама", "мыла", "раму"]));

// toUpperCase() - делает все буквы в строке большими
// toLowerCase() - делает все буквы в строке маленькими

// -----------------------------

displayTeext("мама мыла раму.".slice(0, 4)); // 0 - start, 4 - end, 4 - 0 length

// -----------------------------

// cut принимает в себя длинную строку.
//  Если строка > 300 симаволов, то она обрезается многоточием.
//  Если строка <= 300 символов, то возврящается эта же строка

function cut(str) {
  if (str.length > 300) {
    let cutIndex = 297;
    while (cutIndex >= 0 && str[cutIndex] !== " ")
    {
      cutIndex--;
    }
    // если нет пробелов, то cutIndex = -1
    if (cutIndex === -1) {
      cutIndex = 297;
    }
    return `${str.slice(0, cutIndex)}...`;
  }
  return str;
}

displayTeext(cut("мама мыла раму."));
const veryLongString = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, eaque. Perferendis eum minima harum, nihil non libero corporis quae sed! Beatae laudantium quisquam ex eum dolore obcaecati eius reiciendis quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, eaque. Perferendis eum minima harum, nihil non libero corporis quae sed! Beatae laudantium quisquam ex eum dolore obcaecati eius reiciendis quia.";


const shortSting = cut(veryLongString);

displayTeext(
  cut(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, eaque. Perferendis eum minima harum, nihil non libero corporis quae sed! Beatae laudantium quisquam ex eum dolore obcaecati eius reiciendis quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, eaque. Perferendis eum minima harum, nihil non libero corporis quae sed! Beatae laudantium quisquam ex eum dolore obcaecati eius reiciendis quia."
  )
);
