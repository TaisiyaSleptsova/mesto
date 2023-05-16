class FormValidator {
  constructor (form, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {
    this._form = form,
    this._inputSelector = inputSelector,
    this._submitButtonSelector = submitButtonSelector,
    this._inactiveButtonClass = inactiveButtonClass,
    this._inputErrorClass = inputErrorClass,
    this._errorClass = errorClass    
  }

enableValidation () {
    //находим все поля внутри формы и делаем из них массив
    this._inputSelectorList = Array.from(this._form.querySelectorAll(this._inputSelector));
    //найдем в текущей форме кнопку отправки
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._setEventListeners ()
}

  //обработчик для всех полей формы
  _setEventListeners () {
    this.disableButtonState();
    //переберем все полученные элементы полей внутри формы
    this._inputSelectorList.forEach(inputElement => {
      //каждому полу добавим обработчик событий input
      inputElement.addEventListener('input', (evt) => {
        //внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
        this._isValid(inputElement);
        //проверяем на валидность и меняем состояние кнопки
        if (this._hasInvalidInput()) {
        //сделай кнопку неактивной
        this.disableButtonState();
        } else {
        //иначе сделай кнопку активной
        this._enableButtonState();
        }    
      });
    });
  };

disableButtonState = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled',true);
  }

// Функция очищает ошибки, если ввести невалидные значения, после чего закрыть и снова открыть модальное окно профиля
disableValidationForm () {
  this._inputSelectorList.forEach((input) => { this._hideInputError(input) });
}

_enableButtonState () {
  this._buttonElement.classList.remove(this._inactiveButtonClass);
  this._buttonElement.removeAttribute('disabled');
}

//функция проверки валидности поля
//функция принимает форму и инпут
_isValid (inputElement) {
  if (!inputElement.validity.valid) {
    //передаем сообщение об ошибке третьим аргументом
    //showInputError и hideInputError получают параметром форму, в которой находится проверяемое поле и само это поле
    this._showInputError(inputElement);
  } else {
    this._hideInputError(inputElement);
  }
};

//функция добавления класса с ошибкой
_showInputError (inputElement) {
  //находим элемент ошибки внутри функции
  const formError = this._form.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  //заполним содержимое span браузерным сообщением об ошибке
  formError.textContent = inputElement.validationMessage;
  // покажем сообщение об ошибке
  formError.classList.add(this._errorClass);
};
  
  //функция удаления класса с ошибкой
_hideInputError = (inputElement) => {
  //находим элемент ошибки внутри функции
  const formError = this._form.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(this._inputErrorClass);
  //убираем сообщение об ошибке
  formError.classList.remove(this._errorClass);
  //очистим ошибку
  formError.textContent ='';
};

//проверка всех полей формы на валидность
//функция принимает массив полей
_hasInvalidInput () {
  //перебираем массив
  return this._inputSelectorList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
}

export default FormValidator