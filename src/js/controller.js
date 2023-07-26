import * as model from "./model.js";
import viewForm from "./views/viewForm.js";
import viewList from "./views/viewList.js";
import viewToDo from "./views/viewToDo.js";

const controlForm = function () {
  // 1) Get data from the view
  const toDo = viewForm.getContent();
  if (!toDo) return;

  // 2) Send the data to the model state
  model.addToDo(toDo);

  // 3) Render to-do's list
  viewList.render(model.state.toDoList);
};

const controlToDoStatus = function (id) {
  // 1) Update to-do status
  model.toggleToDoStatus(id);

  // 2) Render to-do's list
  viewList.render(model.state.toDoList);
};

const controlDelete = function (id) {
  // 1) Update to-do status
  model.deleteTodo(id);

  // 2) Render to-do's list
  viewList.render(model.state.toDoList);
};

const init = function () {
  viewList.render(model.state.toDoList);
  viewForm.addHandlerFormSubmit(controlForm);
  viewToDo.addHandlerStatusToggle(controlToDoStatus);
  viewToDo.addHandlerDelete(controlDelete);
};

init();
