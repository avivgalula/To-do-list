class viewForm {
  _parentElement = document.querySelector(".to-do-form");

  getContent() {
    const content = this._parentElement.querySelector(".to-do-input").value;
    this._clearInput();
    return content;
  }

  _clearInput() {
    this._parentElement.querySelector(".to-do-input").value = "";
  }

  addHandlerFormSubmit(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new viewForm();
