//В программировании иногда приходится иметь дело с деньгами. В отличие от большинства других значений,
// деньги могут существовать в разных валютах, которые конвертируются друг в друга по определенным ставкам
// (они меняются со временем!). Из-за этого, часто, недостаточно просто хранить количество денег,
// нужно хранить и их валюту.
// Достаточно давно разработчики заметили, что работа с деньгами происходит во всех проектах примерно одинаково.
// Это привело к созданию определенного подхода (шаблона проектирования) при работе с деньгами.
// В этом задании мы частично реализуем его.
// Money.js
// Реализуйте абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты,
// выполнять арифметические операции и форматировать вывод. Список методов:
// Money(value, currency = 'usd') – создает объект-деньги.
// Money.prototype.getValue() – возвращает стоимость в виде числа
// Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
// Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных денег
// и переданных в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода

// BEGIN (write your solution here)
let rate = {
    usd: 1.2,
    eur: 0.7,
  };
  
  function Money (value, currency='usd') {
    this.value = value;
    this.currency = currency;
  };
  
  Money.prototype.getValue = function getValue() {
    return this.value;
  };
  
  Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
  };
  
  Money.prototype.exchangeTo = function exchangeTo(currency) {
    const initCurrency = this.getCurrency();
    const initValue = this.getValue();
    let newValue = 0;
    if (initCurrency === currency) {
      newValue += initValue;
    } else {
      newValue += initValue * rate[currency];
    }
    return new Money(newValue, currency);
  };
  
  Money.prototype.add = function add(money) {
    const resCurrency = this.getCurrency();
    let newMoney = money.exchangeTo(resCurrency);
    let sumValue = this.getValue() + newMoney.getValue();
    return new Money(sumValue, resCurrency);
  };
  
  Money.prototype.format = function format() {
    return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
  };
  
  export default Money;
  // END// BEGIN (write your solution here)
let rate = {
  usd: 1.2,
  eur: 0.7,
};

function Money (value, currency='usd') {
  this.value = value;
  this.currency = currency;
};

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency) {
  const initCurrency = this.getCurrency();
  const initValue = this.getValue();
  let newValue = 0;
  if (initCurrency === currency) {
    newValue += initValue;
  } else {
    newValue += initValue * rate[currency];
  }
  return new Money(newValue, currency);
};

Money.prototype.add = function add(money) {
  const resCurrency = this.getCurrency();
  let newMoney = money.exchangeTo(resCurrency);
  let sumValue = this.getValue() + newMoney.getValue();
  return new Money(sumValue, resCurrency);
};

Money.prototype.format = function format() {
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

export default Money;
// END