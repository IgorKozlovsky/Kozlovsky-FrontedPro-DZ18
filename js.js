// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

function average(arr) {
  if (!Array.isArray(arr)) {
    return "Ви ввели не масив";
  }
  let count = 0;
  let sum = arr.reduce((prev, curr) => {
    if (!Number.isFinite(curr)) {
      return (prev += 0);
    }
    count++;
    return (prev += curr);
  }, 0);
  return sum / count;
}
console.log(average(["sdasd", 0, 2, "das", "", true, false, null, undefined, {}, [], 25, 1]));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
function doMath(x, znak, y) {
  const operators = ["+", "-", "*", "/", "%", "^"];
  x = +x;
  y = +y;
  if (!Number.isFinite(x) || !Number.isFinite(y) || !operators.includes(znak)) {
    return "Ви ввели не числа або такого знаку не існує";
  }

  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return y !== 0 ? x / y : "Помилка. На нуль ділити не можна";
    case "%":
      return y !== 0 ? x % y : "Помилка. На нуль ділити не можна";
    case "^":
      return x ** y;
  }
}

const inputX = prompt("Введіть перше число");
const inputY = prompt("Введіть друге число");
const inputZnak = prompt("Виберіть дію (+, -, *, /, %, ^)");

console.log(doMath(inputX, inputZnak, inputY));
// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
function doubleArrayFill(arrayOuterLength, arrayInnerLength) {
  if (
    arrayOuterLength !== null &&
    arrayInnerLength !== null &&
    arrayOuterLength.trim() !== "" &&
    arrayInnerLength.trim() !== ""
  ) {
    arrayOuterLength = +arrayOuterLength;
    arrayInnerLength = +arrayInnerLength;
  }
  if (
    !Number.isFinite(arrayOuterLength) ||
    !Number.isFinite(arrayInnerLength) ||
    arrayOuterLength < 0 ||
    arrayInnerLength < 0
  ) {
    return "Ви ввели не число або число < 0";
  }
  const arrayOuter = [];
  for (let i = 0; i < arrayOuterLength; i++) {
    const arrayInner = [];
    for (let j = 0; j < arrayInnerLength; j++) {
      arrayInner.push(prompt(`Введіть значення елементу ${i + 1} рядка, ${j + 1} стовпчика`));
    }
    arrayOuter.push(arrayInner);
  }
  return arrayOuter;
}

const arrayOuterLength = prompt("Введіть довжину основного масиву");
const arrayInnerLength = prompt("Введіть довжину внутрішніх масивів");
console.log(doubleArrayFill(arrayOuterLength, arrayInnerLength));
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function deleteChars(string, delChars) {
  delChars = delChars !== null ? delChars.split(",") : delChars;
  if (string === null || string.trim() === 0 || !Array.isArray(delChars) || delChars.length === 0) {
    return "Помилка. Некоректні дані";
  }
  return string
    .split("")
    .filter((el) => !delChars.includes(el))
    .join("");
}
const inputStr = prompt("Введіть вхідний рядок");
const inputDeleteStr = prompt("Введіть символи для видалення через кому");

console.log(deleteChars(inputStr, inputDeleteStr));
