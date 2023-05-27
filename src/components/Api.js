export default class Api {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
      this._authorization = options.headers.authorization
    }

    _errorChecking (res) {
      return res.ok ? res.json() : Promise.reject
    }

    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: this._authorization
        }
      })
      .then(this._errorChecking)
    }

    getListCards() {
        return fetch(`${this._url}/cards`, {
          headers: {
            authorization: this._authorization
          }
        })
      .then(this._errorChecking)
    }

    getProfileInfo(data) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
          headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        })
      })
      .then(this._errorChecking)
    }

    getProfileAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
          headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar
        })
      })
      .then(this._errorChecking)
    }
  
    addNewCard(data) {
      return fetch(`${this._url}/cards`, {
        method: 'POST',
          headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
      .then(this._errorChecking)
    }
  
    putLikes(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: {
          authorization: this._authorization
        }
      })
      .then(this._errorChecking)
    }

    deleteLikes(cardId) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization
        }
      })
      .then(this._errorChecking)
    }

    deleteCard(cardId) {
      return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._authorization
        }
      })
      .then(this._errorChecking)
    }

  }