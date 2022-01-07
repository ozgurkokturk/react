import { combineReducers } from "redux";
import changeCategoryReducers from "./changeCategoryReducers";
import categoryListReducers from "./categoryListReducers"

// bu redux fonksiyonunun değere atanması
const rootReducer = combineReducers({
    changeCategoryReducers: changeCategoryReducers,
    categoryListReducers: categoryListReducers
})

export default rootReducer;
