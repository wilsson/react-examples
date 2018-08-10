import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CONFIRM_PURCHASE,
} from '../constants/actionTypes';

export const cart = (state = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                action.product
            ]
        case REMOVE_FROM_CART:
            return state.filter(item => item.name !== action.product.name);
        case CONFIRM_PURCHASE:
            return []
        default:
            return state;
    }
};