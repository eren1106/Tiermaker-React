import { ActionTypes } from "../actionTypes"


export const setTitleDescription = (titleDescription) => {
    return {
        type: ActionTypes.SET_TITLE_DESCRIPTION,
        payload: titleDescription,
    }
}