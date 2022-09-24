import { ActionTypes } from "../actionTypes";

export const setSetting = (setting) => {
    return {
        type: ActionTypes.SET_SETTING,
        payload: setting,
    }
}