

export default class Card {
    // Собираем конструктор. На входе список аргументов в виде объекта и добавляем в него селектор шаблона
    constructor(data, templateSelector, handleCardClick) {
      this._data = data;
      this._name = data.placename;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
    }
    
    // Клонируем карточку
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element__container')
        .cloneNode(true);
  
      return cardElement;
    }
  
    // добавляем метод, который вставит карточку в разметку и подготовит к публикации
    generateCard () {
      this._element = this._getTemplate();
      
      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__mask-group').src = this._link;
      this._element.querySelector('.element__mask-group').alt = this._name;
      this._zoomElement = this._element.querySelector('.element__mask-group');
      this._cardLikeButton = this._element.querySelector('.element__like');
      this._cardDelete = this._element.querySelector('.element__delete');
      
      this._setEventListeners();
  
      return this._element;
    }
    
    //метод, в который добавляем все обработчики событий
    _setEventListeners () {
      //открытие попапа с увеличенной картинкой
      this._zoomElement.addEventListener('click', this._handleOpenPopupZoom);
      //проставление лайка
      this._cardLikeButton.addEventListener('click', () => {
        this._handleLikeCard();
      })
      //удаление карточки
      this._cardDelete.addEventListener('click', () => {
        this._cardRemove();
      })
    }
  
    //открытие попапа с картинкой при клике на карточку. Вызываем внешнюю функцию, передавая ей внутренние параметры карточки
    _handleOpenPopupZoom = () => {
      this._handleCardClick(this._data);
    }
  
    //проставление лайков
    _handleLikeCard () {
    this._cardLikeButton.classList.toggle('element__like_active');
    }
  
    //Удаление карточек
    _cardRemove () {
    this._element.remove();
    }
  }

 

