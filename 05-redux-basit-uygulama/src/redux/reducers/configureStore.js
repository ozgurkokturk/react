import {createStore} from "redux"
import rootReducer from "./index"

// bu fonksiyon
export default function configureStore(){
    return createStore(rootReducer)
}
