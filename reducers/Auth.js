import * as types from '../actions/ActionTypes';

const initialState = {
    login: {
        status: 'INIT'
    },
    status: {
        isLoggedIn: false,
        currentUser: '',
    }
};

export default function auth(state = initialState, action) {
    switch(action.type) {
        case types.AUTH_LOGIN:
            return {
                ...initialState,
                login: {
                    status: 'LOGIN'
                }
            };
        case types.AUTH_LOGOUT:
            return {
                ...initialState,
                login: {
                    status: 'LOGOUT'
                }
            };
        default:
            return state;
    }
}