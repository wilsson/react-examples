import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { cart } from '../reducers/cart';
import { products } from '../reducers/products';
import { login } from '../reducers/login';

const reduxDevTool = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
    const store = createStore(
        combineReducers({
            products,
            cart,
            login
        }),
        reduxDevTool,
        applyMiddleware(
            thunk
        )
    );
    return store;
}