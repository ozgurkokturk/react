import { combineReducers } from "redux";
import changeCategoryReducers from "./changeCategoryReducers";
import categoryListReducers from "./categoryListReducers"
import productListReducers from "./productListeReducers";
import cartReducers from "./cartReducers";

// bu redux fonksiyonunun değere atanması
const rootReducer = combineReducers({
    changeCategoryReducers: changeCategoryReducers,
    categoryListReducers: categoryListReducers,
    productListReducers: productListReducers,
    cartReducers : cartReducers,
})

export default rootReducer;
