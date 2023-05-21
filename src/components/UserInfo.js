export default class UserInfo {
  constructor ({nameInput, jobInput}) {
    this._nameInput = nameInput;
    this._jobInput = jobInput;
  }

  getUserInfo () {
    return {name: this._nameInput.textContent, about: this._jobInput.textContent}
  }

  setUserInfo (dataForms) {
    this._nameInput.textContent = dataForms.name;
    this._jobInput.textContent = dataForms.about;
  }
}