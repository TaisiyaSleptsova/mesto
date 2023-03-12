const popupElement = document.querySelector(".popup");
const popupCloseButtomElement = popupElement.querySelector(".popup__close");
const popupOpenButtomElement = document.querySelector(".profile__edit-button");
const profileNameElement = document.querySelector(".profile__title");
const profileJobElement = document.querySelector(".profile__subtitle");
const formElement = popupElement.querySelector(".form");
const nameInput = formElement.querySelector(".form__input-name");
const jobInput = formElement.querySelector(".form__input-job");
const likeButtomElement = document.querySelector(".element__like");

const openPopup = function () {
    popupElement.classList.add('popup__opened');
    nameInput.value = profileNameElement.textContent;
    jobInput.value = profileJobElement.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup__opened');
  };

const handleFormSubmit = function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  closePopup ();
};

const putLike = function () {
  likeButtomElement.classList.toggle('element__like_active');
}

popupOpenButtomElement.addEventListener("click", openPopup);
popupCloseButtomElement.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);
likeButtomElement.addEventListener("click", putLike);



