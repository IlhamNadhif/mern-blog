const globalState = {
  name: "Ilham",
};

const globalReducer = (state = globalState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Nadhif",
    };
  }
  return state;
};

export default globalReducer;