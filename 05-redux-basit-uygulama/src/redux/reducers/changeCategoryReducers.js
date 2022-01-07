import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


// Reducers stateleri döndürür.
export default function changeCategoryReducers(state = initialState.currentCategory, action) {
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state; //initialState gönderiliyor
  }
}
