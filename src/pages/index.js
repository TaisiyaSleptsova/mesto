import './index.css';
import { listCards, popupCardsOpenButtomElement, popupOpenButtomElementProfile, popupOpenProfileAvatar, userData, validationConfig } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithSubmitForm from '../components/PopupWithSubmitForm.js';


import closePopup from '../../images/popup-close.svg';
import addButtonProfile from '../../images/Add-button.svg';
import buttonAvatar from '../../images/Vector-avatar.svg';

const whoIsTheGoat = [
  { name: 'Close popup', image: closePopup},
  { name: 'Profile add button', image: addButtonProfile},
  { name: 'button avatar', image: buttonAvatar}
]; 

//переменные для валидации
const formProfile = document.querySelector('.form_profile');
const formAddImage = document.querySelector('.form_add-image');
const formAvatarProfile = document.querySelector('.popup_avatar');

const formProfileInstance = new FormValidator (formProfile, validationConfig);
const formAddImageInstance = new FormValidator(formAddImage, validationConfig);
const formAvatarProfileInstance = new FormValidator (formAvatarProfile, validationConfig);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: 'e2e8c9aa-6f31-4976-b766-f461d6a54f76',
    'Content-Type': 'application/json'
  }
}); 

formProfileInstance.enableValidation()
formAddImageInstance.enableValidation()
formAvatarProfileInstance.enableValidation()

const openImage = new PopupWithImage('.popup_zoom');
openImage.setEventListeners();


//создание новой карточк
const createNewCard = (data) => {
  const card = new Card(data, '.element', openImage.open, openDelete.open, (element, cardId) => {
  if (element.classList.contains('element__like_active')) {
    api.deleteLikes(cardId)
      .then(res => {
        card.addLikeCard(res.likes);
      })
      .catch(err => console.log(`Ошибка при снятии лайка: ${err}`))
  } else {
    api.putLikes(cardId)
      .then(res => {
        card.addLikeCard(res.likes)
      })
      .catch(err => console.log(`Ошибка при проставлении лайка: ${err}`))
  }
  });
  return card.generateCard()
}

//добавление карточек из массива
const section = new Section({ renderer: (item) => {
  section.addItem(createNewCard(item));
  }}, '.elements__list');

//Добавление карточек через попап
const popupAddImage = new PopupWithForm('.popup_cards', (data) => {
    Promise.all([api.getUserInfo(), api.addNewCard(data)])
    .then(([profileData, cardData]) => {
      cardData.myId = profileData._id
      listCards.prepend(createNewCard(cardData))
      popupAddImage.close()
    })
    .catch(err => console.log(`Ошибка при добавлении карточки: ${err}`))
    .finally(() => popupAddImage.textSubmitButton())    
})
popupAddImage.setEventListeners();

//Удаление карточек
const openDelete = new PopupWithSubmitForm('.popup_delete', ( element, elementId ) => {
  api.deleteCard(elementId)
    .then(() => {
     element.cardRemove();
     openDelete.close();
    })
    .catch(err => console.log(`Ошибка при удалении карточки: ${err}`))
    .finally(() => openDelete.textSubmitButton())
});
openDelete.setEventListeners();

const userInfo = new UserInfo(userData);

const popupProfile = new PopupWithForm('.popup_profile', (data) => {
  api.getProfileInfo(data)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar })
      popupProfile.close()
    }) 
    .catch(err => console.log(`Ошибка при редактировании информации о пользователе: ${err}`))
    .finally(() => popupProfile.textSubmitButton())     
})
popupProfile.setEventListeners();

const popupAvatarProfile = new PopupWithForm('.popup_avatar', (data) => {
  api.getProfileAvatar(data)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, about: res.about, avatar: res.avatar })
      popupAvatarProfile.close()
    })
    .catch(err => console.log(`Ошибка при загрузке аватарки: ${err}`))
    .finally(() => popupAvatarProfile.textSubmitButton())
})
popupAvatarProfile.setEventListeners();

//открытие попапа профиля
popupOpenButtomElementProfile.addEventListener('click', () => {
  formProfileInstance.disableButtonState ();
  formProfileInstance.disableValidationForm ();
  popupProfile.setInputValue(userInfo.getUserInfo());
  popupProfile.open()
});

//открытие попапа редактирования аватарки
popupOpenProfileAvatar.addEventListener('click', () => {
  formAvatarProfileInstance.disableButtonState ();
  formAvatarProfileInstance.disableValidationForm ();
  popupAvatarProfile.open()
})

//Обработчики событий при открытии попапа добавления карточек
popupCardsOpenButtomElement.addEventListener('click', () => {
  formAddImageInstance.disableButtonState ();
  formAddImageInstance.disableValidationForm ();
  popupAddImage.open();
});

Promise.all([api.getUserInfo(), api.getListCards()])
  .then(([profileData, cardsDate]) => {
    cardsDate.forEach(item => item.myId = profileData._id)
    userInfo.setUserInfo({ name: profileData.name, about: profileData.about, avatar: profileData.avatar })
    section.renderItems(cardsDate)
  })

