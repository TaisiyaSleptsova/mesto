import './index.css';
import { initialCards, listCards, popupCardsOpenButtomElement, popupOpenButtomElementProfile, userData, validationConfig } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


import closePopup from '../../images/popup-close.svg';
import addButtonProfile from '../../images/Add-button.svg';

const whoIsTheGoat = [
  { name: 'Close popup', image: closePopup},
  { name: 'Profile add button', image: addButtonProfile}
]; 

//переменные для валидации
const formProfile = document.querySelector('.form_profile');
const formAddImage = document.querySelector('.form_add-image');

const formProfileInstance = new FormValidator (formProfile, validationConfig);
const formAddImageInstance = new FormValidator(formAddImage, validationConfig);

formProfileInstance.enableValidation()
formAddImageInstance.enableValidation()

const openImage = new PopupWithImage('.popup_zoom');
openImage.setEventListeners();

const createNewCard = (data) => {
  const card = new Card(data, '.element', openImage.open);
  return card.generateCard()
}

//добавление карточек из массива
const section = new Section({ renderer: (item) => {
  section.addItem(createNewCard(item));
  }}, '.elements__list');

section.renderItems(initialCards);

const userInfo = new UserInfo(userData);

const popupProfile = new PopupWithForm('.popup_profile', (data) => {
  userInfo.setUserInfo(data);
  popupProfile.close();
})
popupProfile.setEventListeners();

const popupAddImage = new PopupWithForm('.popup_cards', (data) => {
  listCards.prepend(createNewCard(data));
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
  formAddImageInstance.disableButtonState ();
  formAddImageInstance.disableValidationForm ();
  popupAddImage.open();
});
