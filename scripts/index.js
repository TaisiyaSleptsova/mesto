import {initialCards} from './constants.js';

const popupElementProfile = document.querySelector('.popup_profile');
const popupCloseButtomElementProfile = popupElementProfile.querySelector('.popup__close');
const popupOpenButtomElementProfile = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__subtitle');
const formElementProfile = popupElementProfile.querySelector('.form');
const nameInput = formElementProfile.querySelector('.form__input_type_name');
const jobInput = formElementProfile.querySelector('.form__input_type_job');
const cardTemplate = document.querySelector('.element').content.querySelector('.element__container');
const listCards = document.querySelector('.elements__list');


nameInput.value = profileNameElement.textContent;
jobInput.value = profileJobElement.textContent;

const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
  //добавляем функцию закрытия попапа: если при открытом попапе будет нажатие кнопки, функция проверит = ли эта кнопка Esc и закроет попап
  document.addEventListener('keydown', closePopupEscape);
}

const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened')
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

//Закрытие попапа кликом на оверлей
const closePopupOverlay = () => {
  //собираем из попапов массив
const popup = Array.from(document.querySelectorAll('.popup'));
popup.forEach(popup => {
  //обработчик события
  popup.addEventListener("click", (evt) => {
    //
    if (evt.currentTarget === evt.target) {
      closePopup(popup)
    }
  })
})
}

closePopupOverlay()


const handleFormSubmitElementProfile = function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup (popupElementProfile);
};

popupOpenButtomElementProfile.addEventListener('click', function() {
  openPopup(popupElementProfile);
});
popupCloseButtomElementProfile.addEventListener('click', function() {
  closePopup(popupElementProfile);
});
formElementProfile.addEventListener('submit', handleFormSubmitElementProfile);

//попапы
const popupCards = document.querySelector('.popup_cards');


//кнопки открытия
const popupCardsOpenButtomElement = document.querySelector('.profile__add-button');

//кнопки закрытия
const popupCardsCloseButtomElement = popupCards.querySelector('.popup__close');


//Обработчики событий при открытии попапа добавления карточек
popupCardsOpenButtomElement.addEventListener('click', function() {
  openPopup(popupCards);
  const buttonElement = popupCards.querySelector('.form__submit-button');
  disableButtonState(buttonElement, { inactiveButtonClass: validationConfig.inactiveButtonClass})
});

popupCardsCloseButtomElement.addEventListener('click', function() {
  closePopup(popupCards);
});

//Функция размещения карточек из массива initialCards (в импорте)

function createCard(cardInfo) {
  const card = cardTemplate.cloneNode(true);
  const image = card.querySelector('.element__mask-group');
  const imageTitle = card.querySelector('.element__title');
  const cardLikeButton = card.querySelector('.element__like');
  const cardDelete = card.querySelector('.element__delete');
  const popupImage = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');

  image.src = cardInfo.link;
  image.alt = cardInfo.name;
  imageTitle.textContent = cardInfo.name;

  //обработчик события - проставления лайков

  cardLikeButton.addEventListener('click', function() {
    cardLikeButton.classList.add('element__like_active');
    }
  );

  //обработчик события - удаление карточек

  cardDelete.addEventListener('click', function() {
    card.remove();
  });


  //открытие попапа с картинкой

  card.querySelector(".element__mask-group").addEventListener("click", function () {
    openPopup(popupZoom);
    popupImage.src = cardInfo.link;
    popupImage.alt = cardInfo.name;
    popupCaption.textContent = cardInfo.name;
  });
  
  return card;
};


initialCards.forEach(element => {
  let newCard = createCard(element);
  listCards.append(newCard);
});

//добавление новых карточек

const cardImage = document.querySelector('#link-input');
const cardName = document.querySelector('#place-input');
const formCards = popupCards.querySelector('.form');


const handleCardSubmit = function (evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: cardName.value,
    link: cardImage.value
  });  

  listCards.prepend(newCard);
  evt.target.reset();
  closePopup(popupCards);
};

//обработчик событий - сохранение новой карточки

formCards.addEventListener('submit', handleCardSubmit);

//Попап для увеличения фотографий

const popupZoom = document.querySelector('.popup_zoom');
const popupImageClose = popupZoom.querySelector('.popup__close');

//закрытие попапа увеличенных фотографий

popupImageClose.addEventListener('click', function() {
  closePopup(popupZoom);
});