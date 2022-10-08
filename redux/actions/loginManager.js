import {LOGIN, LOGOUT} from '../types';

export function recognizedManager(){
    return {type: LOGIN};
};

export function logoutManager(){
    return {type: LOGOUT};
};