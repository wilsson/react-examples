import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from '../constants/actionTypes';

const fetchLoginRequest = () => ({
    type: LOGIN_REQUEST
});
const fetchLoginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    user
});
const fetchLoginFailure = () => ({
    type: LOGIN_FAILURE
});

export const fetchLogin = (user): any => {
    return (dispatch) => {
        dispatch(fetchLoginRequest())
        setTimeout(() => {
            dispatch(fetchLoginSuccess({
                name: user.name
            }))
        }, 2000)
    }
}