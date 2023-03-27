let popupElement = document.querySelector('.popup');
const popupCloseButtomElement = popupElement.querySelector('.popup__close');
const popupOpenButtomElement = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__subtitle');
const formElement = popupElement.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');

nameInput.value = profileNameElement.textContent;
jobInput.value = profileJobElement.textContent;

//функция открытия
const openPopup = function (popupElement) {
  popupElement.classList.add('popup_opened');
}

const closePopup = function (popupElement) {
  popupElement.classList.remove('popup_opened');
  };

const handleFormSubmit = function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup (popupElement);
};

popupOpenButtomElement.addEventListener('click', function() {
  openPopup(popupElement);
});
popupCloseButtomElement.addEventListener('click', function() {
  closePopup(popupElement);
});
formElement.addEventListener('submit', handleFormSubmit);

//попапы
const popupCards = document.querySelector('.popup_cards');


//кнопки открытия
const popupCardsOpenButtomElement = document.querySelector('.profile__add-button');

//кнопки закрытия
const popupCardsCloseButtomElement = popupCards.querySelector('.popup__close');


//Обработчики событий
popupCardsOpenButtomElement.addEventListener('click', function() {
  openPopup(popupCards);
});

popupCardsCloseButtomElement.addEventListener('click', function() {
  closePopup(popupCards);
});



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 



//Функция размещения карточек из массива выше

function createCard(cardInfo) {
  const cardTemplate = document.querySelector('.element').content.querySelector('.element__container');
  
  const card = cardTemplate.cloneNode(true);
  const image = card.querySelector('.element__mask-group');
  const imageTitle = card.querySelector('.element__title');
  const cardLikeButton = card.querySelector('.element__like');
  const cardDelete = card.querySelector('.element__delete');
  const popupImage = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');

  image.src = cardInfo.link;
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
  document.querySelector('.elements__list').append(newCard);
});

//добавление новых карточек

const cardImage = document.querySelector('#link-input');
const cardName = document.querySelector('#name-input');
const submitCards = popupCards.querySelector('.form');


const handleCardSubmit = function (evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: cardName.value,
    link: cardImage.value
  });  

  document.querySelector('.elements__list').prepend(newCard);
  evt.target.reset();
  closePopup(popupCards);
};

//обработчик событий - сохранение новой карточки

submitCards.addEventListener('submit', handleCardSubmit);
console.log(submitCards);

//Попап для увеличения фотографий

const popupZoom = document.querySelector('.popup_zoom');
const popupImageClose = popupZoom.querySelector('.popup__close');

//закрытие попапа увеличенных фотографий

popupImageClose.addEventListener('click', function() {
  closePopup(popupZoom);
});