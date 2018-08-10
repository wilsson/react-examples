import axios from 'axios';
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS
} from '../constants/actionTypes';

const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
});
const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products
});
const fetchProductsFailure = () => ({
    type: FETCH_PRODUCTS_FAILURE
});

export const fetchProducts = (): any => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get('http://localhost:8888/products')
            .then(({ data }) => {
                dispatch(fetchProductsSuccess(data));
            })
            .catch(err => {
                dispatch(fetchProductsFailure());
            })
    }
}