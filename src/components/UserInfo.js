export default class UserInfo {
  constructor ({nameInput, jobInput, avatar}) {
    this._nameInput = nameInput;
    this._jobInput = jobInput;
    this._avatar = avatar;
  }

  getUserInfo () {
    return {name: this._nameInput.textContent, about: this._jobInput.textContent, avatar: this._avatar.src}
  }

  setUserInfo ({name, about, avatar}) {
    this._nameInput.textContent = name;
    this._jobInput.textContent = about;
    this._avatar.src = avatar;
  }
}