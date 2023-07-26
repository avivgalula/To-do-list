class viewToDo {
  _parentElement = document.querySelector(".to-do-list");

  addHandlerStatusToggle(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const toDo = e.target.closest(".to-do-item");
      const toggleBtn = e.target.closest(".to-do-item-status-btn");
      if (!toggleBtn) return;
      const id = toDo.dataset.id;
      handler(id);
    });
  }

  addHandlerDelete(handler) {
    this._parentElement.addEventListener("click", (e) => {
      const toDo = e.target.closest(".to-do-item");
      const deletBtn = e.target.closest(".to-do-item-delete-btn");
      if (!deletBtn) return;
      const id = toDo.dataset.id;
      handler(id);
    });
  }
}

export default new viewToDo();
