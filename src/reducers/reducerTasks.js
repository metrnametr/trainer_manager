const initialState = {
  tasks: [],
};

const reducerHash = {};

const reducerTasks = (state = initialState, {type, payload}) => {
  return reducerHash[type] ? reducerHash[type](state, payload) : state;
};

export default reducerTasks;
