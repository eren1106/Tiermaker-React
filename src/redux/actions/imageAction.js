import { ActionTypes } from "../actionTypes";

export const setImages = (images) => {
    return {
        type: ActionTypes.SET_IMAGES,
        payload: images,
    }
}