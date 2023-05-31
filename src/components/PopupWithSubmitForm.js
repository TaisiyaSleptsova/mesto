import Popup from "./Popup.js";

export default class PopupWithSubmitForm extends Popup {
  constructor(popupSelector, deleteConfirmation) {
    super(popupSelector);
    this._deleteConfirmation = deleteConfirmation;
    this._form = this._popupElement.querySelector('.form');
    this._submitButton = this._form.querySelector('.form__submit-button');
    this._submitButtonText = this._submitButton.textContent
  }

  open = (element, elementId) => {
    super.open()
    this._element = element
    this._elementId = elementId
  }

  //   -  метод setSubmitAction, который делает следующее: принимает в качестве аргумента функцию, и устанавливает ее в свойства класса, в качестве функции которая будет исполнена при сабмите. то есть просто создает свойство и кладет туда функцию
  _setSubmitAction = () => {
    this._deleteConfirmation (this._element, this._elementId)
  }

  // - свой метод setEventListeners который в отличие от PopupWithForm никак не собирает и не передает поля ввода в исполняемую функцию. Исполняемая функция теперь определяется не в конструкторе, а через публичный метод setSubmitAction
  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `Удаление...`
      this._setSubmitAction()
    })
  }

  textSubmitButton () {
    this._submitButton.textContent = this._submitButtonText
  }

}