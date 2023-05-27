export const listCards = document.querySelector('.elements__list');
//кнопки открытия
export const popupCardsOpenButtomElement = document.querySelector('.profile__add-button');
export const popupOpenButtomElementProfile = document.querySelector('.profile__edit-button');
export const popupOpenProfileAvatar = document.querySelector('.profile__edit-avatar-button');


export const userData ={
  nameInput: document.querySelector('.profile__title'),
  jobInput: document.querySelector('.profile__subtitle'),
  avatar: document.querySelector('.profile__avatar')
}

export const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_active'
}