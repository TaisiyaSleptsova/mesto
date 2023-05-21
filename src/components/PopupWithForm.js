import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popupElement.querySelector('.form');
    this._formInputs = this._form.querySelectorAll('.form__input');
  }

  _getInputValues () {
//собирает данные всех полей формы.
  this._dataForms = {};
  this._formInputs.forEach(input => {
  this._dataForms[input.name] = input.value
  });
  return this._dataForms
  }

  setInputValue (dataForms) {
    this._formInputs.forEach(input => {
      input.value = dataForms[input.name];
    })
  }

  setEventListeners () {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues())
    })
  }

  close () {
    super.close();
    this._form.reset()
  }
}