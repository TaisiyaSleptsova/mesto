import {initialCards} from './constants.js';

const popupElementProfile = document.querySelector('.popup_profile');
const popupOpenButtomElementProfile = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__subtitle');
const formElementProfile = popupElementProfile.querySelector('.form');
const nameInput = formElementProfile.querySelector('.form__input_type_name');
const jobInput = formElementProfile.querySelector('.form__input_type_job');
const cardTemplate = document.querySelector('.element').content.querySelector('.element__container');
const listCards = document.querySelector('.elements__list');
//попапы
const popupCards = document.querySelector('.popup_cards');
//кнопки открытия
const popupCardsOpenButtomElement = document.querySelector('.profile__add-button');
//кнопка добавления
const buttonElement = popupCards.querySelector('.form__submit-button');
//картинка
const popupImage = document.querySelector('.popup__image');
//подпись под картинкой
const popupCaption = document.querySelector('.popup__caption');
//переменные для добавления новых карточек
const cardImage = document.querySelector('#link-input');
const cardName = document.querySelector('#place-input');
const formCards = popupCards.querySelector('.form');
//Попап для увеличения фотографий
const popupZoom = document.querySelector('.popup_zoom');

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

//Функция размещения карточек из массива initialCards (в импорте)
function createCard(cardInfo) {
  const card = cardTemplate.cloneNode(true);
  const image = card.querySelector('.element__mask-group');
  const imageTitle = card.querySelector('.element__title');
  const cardLikeButton = card.querySelector('.element__like');
  const cardDelete = card.querySelector('.element__delete');

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
  const newCard = createCard(element);
  listCards.append(newCard);
});

//добавление новых карточек
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

//открытие попапа
popupOpenButtomElementProfile.addEventListener('click', function() {
  openPopup(popupElementProfile);
});

//сохранение формы профиля
formElementProfile.addEventListener('submit', handleFormSubmitElementProfile);

//обработчик событий - сохранение новой карточки
formCards.addEventListener('submit', handleCardSubmit);

//Обработчики событий при открытии попапа добавления карточек
popupCardsOpenButtomElement.addEventListener('click', function() {
  openPopup(popupCards);
  disableButtonState(buttonElement, { inactiveButtonClass: validationConfig.inactiveButtonClass})
});