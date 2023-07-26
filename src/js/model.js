export const state = {
  toDoList: [],
};

export const addToDo = function (content) {
  const toDo = {
    content,
    id: 123,
    finish: false,
  };

  state.toDoList = [...state.toDoList, toDo];
};
