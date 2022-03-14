import { GET_LOGIN_DATA, GET_PRODUCT_ID, SET_CART_DATA } from "../constants"

export const setLoginData =(data)=>{
    return {
        type: GET_LOGIN_DATA,
        payload : data
    }
};

export const setProductdata =(data)=>{
    return {
        type: SET_CART_DATA,
        payload : data
    }
};
export const setProductId = (id)=>{
    return{
        type: GET_PRODUCT_ID ,
        payload: id
    }
}