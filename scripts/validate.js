const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_active'
}

//обработчик для всех форм
const enableValidation = ({formSelector, ...rest}) => {
  //находим все формы и делаем из них массив
  const formSelectorList =Array.from(document.querySelectorAll(formSelector));
  //перебераем все полученные формы
  formSelectorList.forEach((formElement) => {
    //вешаем на форму обработчик событий submit и отменяем стандартное поведение (отменяем перезагрузку страницы и отправку данных на сервер)
    formElement.addEventListener('submit', function(evt) {
      evt.preventDefault();
    })
    //для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
    setEventListeners(formElement, rest);
  });
};

//обработчик для всех полей формы
const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
  //находим все поля внутри формы и делаем из них массив
  const inputSelectorList = Array.from(formElement.querySelectorAll(inputSelector));
  //найдем в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(submitButtonSelector);
  disableButtonState(buttonElement, rest);
  //переберем все полученные элементы полей внутри формы
  inputSelectorList.forEach((inputElement) => {
    //каждому полу добавим обработчик событий input
    inputElement.addEventListener('input', () => {
      //внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, rest);
      //проверяем на валидность и меняем состояние кнопки
      if (hasInvalidInput(inputSelectorList)) {
      //сделай кнопку неактивной
      disableButtonState(buttonElement, rest);
      } else {
      //иначе сделай кнопку активной
      enableButtonState(buttonElement, rest);
      }    
    });
  });
};
  
//функция перевода кнопки в активное состояние
const enableButtonState =  (buttonElement, { inactiveButtonClass, ...rest}) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

//функция перевода кнопки в неактивное состояние
const disableButtonState = (buttonElement, { inactiveButtonClass, ...rest}) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute('disabled',true);
}

//функция проверки валидности поля
//функция принимает форму и инпут
const isValid = (formElement, inputElement, rest) => {
  if (!inputElement.validity.valid) {
    //передаем сообщение об ошибке третьим аргументом
    //showInputError и hideInputError получают параметром форму, в которой находится проверяемое поле и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage, rest);
  } else {
    hideInputError(formElement, inputElement, rest);
  }
};

//функция добавления класса с ошибкой
const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
  //находим элемент ошибки внутри функции
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  //заполним содержимое span браузерным сообщением об ошибке
  formError.textContent = errorMessage;
  // покажем сообщение об ошибке
  formError.classList.add(errorClass);
};
  
  //функция удаления класса с ошибкой
  
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  //находим элемент ошибки внутри функции
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  //убираем сообщение об ошибке
  formError.classList.remove(errorClass);
  //очистим ошибку
  formError.textContent ='';
};
  
  
//проверка всех полей формы на валидность
//функция принимает массив полей
const hasInvalidInput = (inputList) => {
  //перебираем массив
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
  
  
//вызовем функцию
enableValidation(validationConfig);
  
  