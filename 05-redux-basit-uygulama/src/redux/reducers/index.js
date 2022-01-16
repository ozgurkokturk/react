import { combineReducers } from "redux";
import changeCategoryReducers from "./changeCategoryReducers";
import categoryListReducers from "./categoryListReducers"
import productListReducers from "./productListeReducers";
import cartReducers from "./cartReducers";
import createOrUpdateProductReducers from "./createOrUpdateProductReducers";

// bu redux fonksiyonunun değere atanması
const rootReducer = combineReducers({
    changeCategoryReducers: changeCategoryReducers,
    categoryListReducers: categoryListReducers,
    productListReducers: productListReducers,
    cartReducers : cartReducers,
    createOrUpdateProductReducers: createOrUpdateProductReducers,
})

export default rootReducer;
