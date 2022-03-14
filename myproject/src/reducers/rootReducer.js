import { combineReducers } from "redux";
import { getLoginData, getProductData } from "./cartData";
import { getProductId } from "./getProductId";

const rootReducer = combineReducers({
    getLoginData,getProductData,getProductId
});
export default rootReducer;