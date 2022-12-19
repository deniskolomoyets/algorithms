//Валидация - процесс проверки корректности данных. В вебе происходит всегда при отправке форм, например,
// регистрация на многих сайтах проверяет корректность введённого емейла, его уникальность (что такого пользователя ещё нет).
// Каждый тип валидации в таких системах обычно представлен классом-валидатором, который принимает на вход опции
// и предоставляет интерфейс в виде функции validate(). Эта функция принимает на вход то, что проверяется (валидируется)
// и возвращает массив или объект с ошибками. Если объект пустой, значит ошибок нет.
// solution.js
// Реализуйте и экспортируйте по умолчанию класс PasswordValidator, ориентируясь на тесты.
// Этот валидатор поддерживает следующие опции:
// minLength (по умолчанию 8) - минимальная длина пароля
// containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
// Опции передаются одним объектом в конструктор валидатора.
// Объект ошибок в ключах содержит название опции, а в значениях текст, указывающий на ошибку (тексты можно подсмотреть в тестах).

class PasswordValidator {
    constructor(options = {}) {
        let containNumbers = true;
        if (options.containNumbers !== undefined) {
            containNumbers = options.containNumbers;
        }
        this.minLength = options.minLength !== undefined ? options.minLength : 8;
        this.containNumbers = containNumbers;
    }

    hasNumber(string) {
        return string.search(/\d/) !== -1;
    }

    validate(password) {
        let result = {};
        if (this.containNumbers) {
            const hasNumber = this.hasNumber(password);
            if (!hasNumber) {
                result.containNumbers = 'should contain at least one number';
            }
        }

        if (password.length < this.minLength) {
            result.minLength = 'too small';
        }
        return result;
    }
}

================================================================================================

export default class PasswordValidator {
    constructor(options = {}) {
      const defaultOptions = {
        minLength: 8,
        containNumbers: true,
      };
  
      this.options = { ...defaultOptions, ...options };
    }
  
    validate(password) {
      const errors = {};
  
      if (password.length < this.options.minLength) {
        errors.minLength = 'too small';
      }
  
      if (this.options.containNumbers) {
        if (!hasNumber(password)) {
          errors.containNumbers = 'should contain at least one number';
        }
      }
  
      return errors;
    }
  }
