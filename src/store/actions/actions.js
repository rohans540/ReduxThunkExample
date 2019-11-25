export const loading = () => {
  //Action loading using which the logo is displayed
  return {
    type: "LOADING"
  };
};

export const ageUpAsync = val => {
  return { type: "AGE_UP", value: val };
};

export const ageUp = val => {
  return dispatch => {
    dispatch(loading()); //dispatching loading action when ageUp is clicked (This is synchronous)

    setTimeout(() => {
      dispatch(ageUpAsync(val)); //calling our actionCreator ageUpAsync() after waiting 2 seconds (this is asynchronous)
    }, 2000);
  };
};

export const ageDown = val => {
  return { type: "AGE_DOWN", value: val };
};
