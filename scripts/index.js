const popupElement = document.querySelector('.popup');
const popupCloseButtomElement = popupElement.querySelector('.popup__close');
const popupOpenButtomElement = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__title');
const profileJobElement = document.querySelector('.profile__subtitle');
const formElement = popupElement.querySelector('.form');
const nameInput = formElement.querySelector('.form__input_type_name');
const jobInput = formElement.querySelector('.form__input_type_job');

const openPopup = function () {
    popupElement.classList.add('popup_opened');
    nameInput.value = profileNameElement.textContent;
    jobInput.value = profileJobElement.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
  };

const handleFormSubmit = function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup ();
};

popupOpenButtomElement.addEventListener('click', openPopup);
popupCloseButtomElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);



