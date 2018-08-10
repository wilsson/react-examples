import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS
} from '../constants/actionTypes';

import { ProductModel } from '../models/product';

export interface ProductsState {
    isFetching: boolean;
    items: ProductModel[];
    error: boolean;
}

const initialStateProduct = {
    isFetching: false,
    error: false,
    items: []
};

export const products = (state: ProductsState = initialStateProduct, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                isFetching: false,
                error: false,
                items: action.products
            }
        default:
            return state;
    }
};