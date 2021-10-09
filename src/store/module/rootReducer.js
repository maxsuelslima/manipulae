import { combineReducers } from "redux";
import {store} from "./lista/reducer";
import {handleModal} from './modal/reducer'
export default combineReducers({
    store,
    handleModal
})