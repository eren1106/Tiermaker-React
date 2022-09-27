import { ActionTypes } from "../actionTypes"

const initialState = {
    titleDescription: {
        title: 'title',
        description: 'description'
    }
}

export const titleDescriptionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TITLE_DESCRIPTION:
            return { ...state, titleDescription: payload };
        default:
            return state;
    }
}