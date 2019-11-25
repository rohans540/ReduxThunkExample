const initialState = {
  age: 20
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      newState.age = newState.age + action.value;
      newState.loading = false; //newState.loading become false when the execution reaches to AGE_UP reducer. (Logo will get dissappeared)
      break;
    case "AGE_DOWN":
      newState.age = newState.age - action.value;
      break;
    case "LOADING":
      newState.loading = true; //newState.loading becomes true as soon as action LOADING is dispatched (Logo will be displayed)
      break;
  }
  return newState;
};
export default reducer;
