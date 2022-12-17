//Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:
//
// addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства:
// name – имя и price – стоимость.
// getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
// getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
// getCount – возвращает количество товаров в корзине
//Примеры
// const cart = new Cart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35

class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item, count) {
      return this.items.push({ item, count });
    }
  
    getItems() {
      return this.items;
    }
  
    getCost() {
      return this.items.reduce((acc, products) => {
        acc += products.item.price * products.count;
        return acc;
      }, 0);
    }
  
    getCount() {
      return this.items.reduce((acc, products) => {
        return acc += products.count;
      }, 0);
    }
  }