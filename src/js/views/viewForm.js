class viewForm {
  _parentElement = document.querySelector(".to-do-form");

  getContent() {
    const content = this._parentElement.querySelector(".to-do-input").value;
    return;
    content;
  }

  addHandlerForm(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      handler();
    });
  }
}

export default viewForm;
