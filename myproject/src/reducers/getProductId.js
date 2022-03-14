import { GET_PRODUCT_ID } from "../constants";

export const getProductId = (state=[],action)=>{
    switch ( action.type){
        case GET_PRODUCT_ID:
        return  state=[...state,action.payload];
        default:
            return state;
    }
}