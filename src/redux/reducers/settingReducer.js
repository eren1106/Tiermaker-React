import { ActionTypes } from "../actionTypes"

const initialState = {
    setting: {
        label: 'label',
        labelColor: 'red',
    }
}

export const settingReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_SETTING:
            return {...state, setting: payload};
        default:
            return state;
    }
}