

export default class Card {
    // Собираем конструктор. На входе список аргументов в виде объекта и добавляем в него селектор шаблона
    constructor(data, templateSelector, handleCardClick, handleCardDelete, addLike) {
      this._data = data;
      this._name = data.name;
      this._link = data.link;
      this._myId = data.myId;
      this._userId = data.owner._id;
      this._cardId = data._id;
      this._likes = data.likes;
      this._isLiked = false;
      this._likesLength = data.likes.length;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._handleCardDelete = handleCardDelete;
      this._addLike = addLike;      
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
      this._element.querySelector('.element__mask-group').alt = `Увеличенное изображение ${this._name}`;
      this._element.querySelector('.element__like-count').textContent = this._likesLength;
      this._zoomElement = this._element.querySelector('.element__mask-group');
      this._cardLikeButton = this._element.querySelector('.element__like');
      this._cardDelete = this._element.querySelector('.element__delete');
      
      this._countLikes ();
      this._cancellationDelete ();
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
      this._cardDelete.addEventListener('click', this._handleOpenPopupDeleteCard);
    }
  
    //открытия попапа подтверждения удаления
    _handleOpenPopupDeleteCard = () => {
      this._handleCardDelete( this, this._cardId );
    }

    //открытие попапа с картинкой при клике на карточку. Вызываем внешнюю функцию, передавая ей внутренние параметры карточки
    _handleOpenPopupZoom = () => {
      this._handleCardClick(this._data);
    }
  
    //проставление и снятие лайков
    _handleLikeCard = () => {
      this._addLike(this._isLiked, this._cardLikeButton, this._cardId)
    // this._cardLikeButton.classList.toggle('element__like_active');
    }

    //проставление лайков
    addLikeCard (likes) {
      if (this._isLiked = true) {
      this._cardLikeButton.classList.toggle('element__like_active');
      this._element.querySelector('.element__like-count').textContent = likes.length;
      this._isLiked = false
      } 
    }

    //счетчик лайков
    _countLikes () {
      this._likes.forEach(item => {
        if (item._id === this._myId) {
          this._cardLikeButton.classList.add('element__like_active')
          this._isLiked = true
        } return 
      });
      this._element.querySelector('.element__like-count').textContent = this._likesLength;
    }

    //убираем возможновть удаления на чужих карточках
    _cancellationDelete () {
      if (this._userId === this._myId) {
          this._cardDelete.classList.add('element__delete_active')
          } return
    }
  
    //Удаление карточек
    cardRemove () {
    this._element.remove();
    this._element = null;
    }
  }

 

