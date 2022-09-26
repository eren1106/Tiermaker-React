import { ActionTypes } from "../actionTypes"

export const setRows = (rows) => {
    return {
        type: ActionTypes.SET_ROWS,
        payload: rows
    }
}

export const deleteRow = (id) => {
    return {
        type: ActionTypes.DELETE_ROW,
        payload: id
    }
}

export const clearRow = (id) => {
    return {
        type: ActionTypes.CLEAR_ROW,
        payload: id
    }
}

export const upRow = (id) => {
    return {
        type: ActionTypes.UP_ROW,
        payload: id
    }
}

export const downRow = (id) => {
    return {
        type: ActionTypes.DOWN_ROW,
        payload: id
    }
}

export const addTopRow = (id) => {
    return {
        type: ActionTypes.ADD_TOP_ROW,
        payload: id
    }
}

export const addBottomRow = (id) => {
    return {
        type: ActionTypes.ADD_BOTTOM_ROW,
        payload: id
    }
}