// Функция для проверки длины строки.
const stringLenght = (string, quantity) => {
  string = string.length;
  if (string <= quantity) {
    return 'true';
  } else {
    return 'false';
  }
};
console.log (stringLenght('Проверяем работу',16));

//Функция для проверки, является ли строка палиндромом.
const palindrome = (string) => {
  let normalString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = normalString.split('').reverse().join('');
  if (normalString === reverseString) {
    console.log('Строка - палиндром');
  } else {
    console.log('Строка - не палиндром');
  }
};

// Здесь вызовы функций
palindrome('Лёша на полке клопа нашёл');
