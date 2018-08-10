import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from '../constants/actionTypes';

const initialStateUser = {
    user: '',
    loggedIn: false,
    isFetching: false,
    error: false
}

export const login = (state = initialStateUser, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case LOGIN_SUCCESS:
            return {
                isFetching: false,
                loggedIn: true,
                error: false,
                user: action.user.name
            }
        default:
            return state;
    }
}