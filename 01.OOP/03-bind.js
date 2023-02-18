//Функции bind(), apply() и call() работают с контекстом и аргументами.
// В этом упражнении вы научитесь заменять одну функцию другой для получения функциональности, аналогичной bind().
// bind.js
// Реализуйте и экспортируйте по умолчанию функцию, которая ведет себя аналогично встроенной bind(obj, fn).
// Аргументы функции:
// obj – объект выступающий в роли контекста
// fn() – функция привязываемая к контексту
// const obj = { number: 5 };

const bind = (obj, fn) => (...arg) => fn.apply(obj, arg);
const obj = { number: 5 };
const fn = function fn(number) {
  return number + this.number;
};
const fnWithContext = bind(obj, fn);

// END
export default bind;