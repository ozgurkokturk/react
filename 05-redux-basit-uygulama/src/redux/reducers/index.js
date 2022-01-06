import { combineReducers } from "redux";
import changeCategoryReducers from "./changeCategoryReducers";

// bu redux fonksiyonunun değere atanması
const rootReducer = combineReducers({
    changeCategoryReducers: changeCategoryReducers
})

export default rootReducer;
