export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupElementClose = this._popupElement.querySelector('.popup__close');
  }

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  } 


  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
  }

  _handleEscClose (evt) {
    if (evt.key === 'Escape')  {    
      this.close();
    }
  }

  _closePopupByClickOverlay (evt) {
    if (evt.currentTarget === evt.target) {
      this.close();
    }
  }

  setEventListeners (evt) {
    this._popupElement.addEventListener("click", (evt) => this._closePopupByClickOverlay(evt));
    this._popupElementClose.addEventListener("click", (evt) => this.close(evt));
  }
}