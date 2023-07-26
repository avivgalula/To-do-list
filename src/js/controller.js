import * as model from "./model";
import viewForm from "./views/viewForm";

const controlForm = function () {
  // 1) Get data from the view
  const toDo = viewForm.getContent();

  // 2) Send the data to the model state
  model.addToDo(toDo);

  // 3) Render new to-do's list
};

const init = function () {
  viewForm.addHandlerForm(controlForm);
};

init();
