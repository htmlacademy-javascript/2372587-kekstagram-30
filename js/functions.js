// Функция для проверки длины строки.
const stringLenght = (string, quantity) => {
  string = string.length;
  if (string <= quantity) {
    return 'true';
  } else {
    return 'false';
  }
};
stringLenght('Проверяем работу',16);


//Функция для проверки, является ли строка палиндромом.
const palindrome = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  const reverseString = normalString.split('').reverse().join('');
  return reverseString === normalString;
};

// Здесь вызовы функций
palindrome('Лёша на полке клопа нашёл');
