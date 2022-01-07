import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


// Reducers stateleri döndürür.
export default function changeCategoryReducers(state = initialState.categories, action) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state; //initialState gönderiliyor
  }
}
