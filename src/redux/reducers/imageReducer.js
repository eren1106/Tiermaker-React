import { ActionTypes } from "../actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    images: [{
        id: uuidv4(),
        src: 'images/unnamed.png',
    }]
}

export const imageReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_IMAGES:
            return { ...state, images: payload};
        default:
            return state;
    }
}