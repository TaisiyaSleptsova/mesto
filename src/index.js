import '../pages/index.css';
import { initialCards, listCards, popupCardsOpenButtomElement, popupOpenButtomElementProfile, formProfile, formAddImage, userData, validationConfig } from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';


import closePopup from '../images/popup-close.svg';
import addButtonProfile from '../images/Add-button.svg';

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Close popup', image: closePopup},
  { name: 'Profile add button', image: addButtonProfile}
]; 

const formProfileInstance = new FormValidator (formProfile, validationConfig);
const formAddImageInstance = new FormValidator(formAddImage, validationConfig);

formProfileInstance.enableValidation()
formAddImageInstance.enableValidation()

const openImage = new PopupWithImage('.popup_zoom');
openImage.setEventListeners();

//добавление карточек из массива
const section = new Section({ items: initialCards, renderer: (item) => {
  const card = new Card(item, '.element', openImage.open);
  const cardElement = card.generateCard();
  section.addItem(cardElement);
  }}, '.elements__list');

section.renderItems();

const userInfo = new UserInfo(userData);

const popupProfile = new PopupWithForm('.popup_profile', (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues());
  popupProfile.close();
})
popupProfile.setEventListeners();

const popupAddImage = new PopupWithForm('.popup_cards', (evt) => {
  evt.preventDefault();
  const card = new Card(popupAddImage.getInputValues(), '.element', openImage.open);
  const newCardElement = card.generateCard();
  listCards.prepend(newCardElement);
  popupAddImage.close();
})
popupAddImage.setEventListeners();

//открытие попапа профиля
popupOpenButtomElementProfile.addEventListener('click', () => {
  formProfileInstance.disableButtonState ();
  formProfileInstance.disableValidationForm ();
  popupProfile.setInputValue(userInfo.getUserInfo());
  popupProfile.open()
});

//Обработчики событий при открытии попапа добавления карточек
popupCardsOpenButtomElement.addEventListener('click', () => {
  formAddImageInstance.disableButtonState ('.popup_profile');
  popupAddImage.open();
});
