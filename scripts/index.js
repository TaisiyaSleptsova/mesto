import {initialCards} from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const popupElementProfile = document.querySelector('.popup_profile');
const popupOpenButtomElementProfile = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__subtitle');
const formElementProfile = popupElementProfile.querySelector('.form');
const nameInput = formElementProfile.querySelector('.form__input_type_name');
const jobInput = formElementProfile.querySelector('.form__input_type_job');
//const cardTemplate = document.querySelector('.element').content.querySelector('.element__container');
const listCards = document.querySelector('.elements__list');
//попапы
const popupCards = document.querySelector('.popup_cards');
//кнопки открытия
const popupCardsOpenButtomElement = document.querySelector('.profile__add-button');
//кнопка добавления
const buttonElement = popupCards.querySelector('.form__submit-button');
//переменные для открытия попапа с картинкой

const popupZoom = document.querySelector('.popup_zoom');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
//переменные для добавления новых карточек
const formCards = popupCards.querySelector('.form');
const cardImage = document.querySelector('#link-input');
const cardName = document.querySelector('#place-input');

//переменные для валидации
const formProfile = document.querySelector('.form_profile');
const formAddImage = document.querySelector('.form_add-image');

const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_active'
}

const formProfileInstance = new FormValidator (formProfile, validationConfig);
const formAddImageInstance = new FormValidator(formAddImage, validationConfig);

formProfileInstance.enableValidation()
formAddImageInstance.enableValidation()

nameInput.value = profileNameElement.textContent;
jobInput.value = profileJobElement.textContent;

const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
  //добавляем функцию закрытия попапа: если при открытом попапе будет нажатие кнопки, функция проверит = ли эта кнопка Esc и закроет попап
  document.addEventListener('keydown', closePopupEscape);
}

const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
  //при закрытии попапа удаляем обработчик собития нажатия на клавиатуру
  document.removeEventListener('keydown', closePopupEscape);
};

//Функция закрытия попапа при нажатии на Esc
const closePopupEscape = (evt) => {
  //если нажата кнопка Esc 
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened')
    // и если попап открыт
    if (activePopup) {    
      //вызываем функцию  закрытия попапа
      closePopup(activePopup)
    }
  }
};

//Закрытие попапа кликом на оверлей и на крестик закрытия
const closePopupByClick = () => {
  //собираем из попапов массив
const popup = Array.from(document.querySelectorAll('.popup'));
popup.forEach(popup => {
  //обработчик события
  popup.addEventListener("click", (evt) => {
    //если клик произошел вне области попапа или если клик произошел по кнопке с определенным классом,то 
    if (evt.currentTarget === evt.target || evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})
}

closePopupByClick()

//функция сохранения формы профиля
const handleFormSubmitElementProfile = function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup (popupElementProfile);
};

// Добавление карточек из массива initialCards
initialCards.forEach((item) => {
  // Создаем экземпляр карточки 
  const card = new Card(item, '.element');
  // Создаем карточку и возвращаем наружу 
   const cardElement = card.generateCard();

  // Добавляем в DOM 
  document.querySelector('.elements__list').append(cardElement);
});

//добавление новых карточек
const handleCardSubmit = function (evt) {
  evt.preventDefault();
    const newCard = new Card({
      name: cardName.value,
      link: cardImage.value},
      '.element'    
    ) ; 
    const newCardElement = newCard.generateCard();
  listCards.prepend(newCardElement);
  evt.target.reset();
  closePopup(popupCards);
};

//функция открытия попапа с картинкой при клике на карточку
const handleOpenPopupImageZoom = (card) => {
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupCaption.textContent = card.name;
  openPopup(popupZoom);
}

//обработчик событий - сохранение новой карточки
formCards.addEventListener('submit', handleCardSubmit);

//открытие попапа
popupOpenButtomElementProfile.addEventListener('click', function() {
  openPopup(popupElementProfile);
  formProfileInstance.disableButtonState ()
});

//сохранение формы профиля
formElementProfile.addEventListener('submit', handleFormSubmitElementProfile);

//Обработчики событий при открытии попапа добавления карточек
popupCardsOpenButtomElement.addEventListener('click', function() {
  openPopup(popupCards);
  formAddImageInstance.disableButtonState ()
});

export { handleOpenPopupImageZoom, openPopup };