//Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число.
// Рациональное число должно быть представлено объектом со следующими методами:
// Геттер getNumer() - возвращает числитель
// Геттер getDenom() - возвращает знаменатель
// Геттер toString() - возвращает строковое представление числа
// Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает
// новое рациональное число (не изменяет текущее!)
//const rat1 = make(3, 9);
// rat1.getNumer(); // 3
// rat1.getDenom(); // 9
//
// const rat2 = make(10, 3);
//
// // Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
// const rat3 = rat1.add(rat2);
// rat3.toString(); // '99/27'

const make = (numer, denom) => ({
    numer,
    denom,
    setNumer(newNumer) {
      this.numer = newNumer;
    },
    setDenom(newDenom) {
      this.denom = newDenom;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.getNumer()}/${this.getDenom()}`
    },
    add(val) {
      const a = this.getNumer();
      const b = this.getDenom();
      const c = val.getNumer();
      const d = val.getDenom();
      return make((a * d + b * c), (b * d));
    }
  });
