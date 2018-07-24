import { createStore } from 'redux';
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CONFIRM_PURCHASE
} from '../constants/actionTypes';

import { ProductModel } from '../models/product'
const initialState = {
    products: [
        {
            image: 'https://i.linio.com/p/5e5515b735b353321ff410490dd3e04f-product.jpg',
            name: 'Iphone 6',
            price: 800
        },
        {
            image: 'https://i.linio.com/p/572c875e25b329ad72f42e1dc1558619-card.jpg',
            name: 'Nintendo Switch',
            price: 1500
        }
    ],
    cart: []
}

interface Store {
    products: ProductModel[],
    cart: ProductModel[];
}

let reducer = (state: Store, action) => {
    if(action.type === ADD_TO_CART) {
        return {
            ...state,
            cart: [...state.cart, action.product]
        }
    }
    if(action.type === REMOVE_FROM_CART) {
        return {
            ...state,
            cart: state.cart.filter(item => item.name !== action.product.name)
        }
    }
    if(action.type === CONFIRM_PURCHASE) {
        return {
            ...state,
            cart: []
        }
    }
    return state;
}

export const store = createStore(reducer, initialState);