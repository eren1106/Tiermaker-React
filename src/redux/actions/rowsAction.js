import { ActionTypes } from "../actionTypes"

export const setRows = (rows) =>{
    return {
        type: ActionTypes.SET_ROWS,
        payload: rows
    }
}