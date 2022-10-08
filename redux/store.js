
import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { LOGIN, LOGOUT } from './types';

const initialState = {
    admin_logged_in: false
};



function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return { admin_logged_in: true };
        case LOGOUT:
            return { admin_logged_in: false };
        default:
            return state;
    }   
}

const store = createStore(reducer, initialState);
const makeStore = () => {
    return store;
}
const wrapper = createWrapper(makeStore);

export {store, wrapper};