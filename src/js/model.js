export const state = {
  toDoList: [],
};

const presistList = function () {
  localStorage.setItem("to-do-list", JSON.stringify(state.toDoList));
};

export const addToDo = function (content) {
  const toDo = {
    content,
    id: state.toDoList.length + 1,
    done: false,
  };

  state.toDoList = [...state.toDoList, toDo];

  presistList();
};

export const toggleToDoStatus = function (id) {
  const newToDoList = state.toDoList.map((todo) => {
    if (todo.id === +id) todo.done = !todo.done;
    return todo;
  });

  state.toDoList = newToDoList;

  presistList();
};

export const deleteTodo = function (id) {
  const newToDoList = state.toDoList.filter((todo) => !(todo.id === +id));

  state.toDoList = newToDoList;

  presistList();
};

const init = function () {
  const storage = localStorage.getItem("to-do-list");
  if (storage) state.toDoList = JSON.parse(storage);
};

init();
