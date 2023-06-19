// Функция для проверки длины строки
const checkStringLength = (str, maxLength) => str.length <= maxLength;

checkStringLength('Программирование', 20);

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = function (string) {
  const newString = string.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = newString.length - 1; i >= 0; i--) {
    result += newString[i];
  }
  return result === newString;
};

checkPalindrome('топот');
