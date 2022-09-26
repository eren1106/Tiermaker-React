import { ActionTypes } from "../actionTypes";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    rows: [
        {
            id: uuidv4(),
            label: 'S',
            labelColor: '#ff7f7f',
            items: []
        },
        {
            id: uuidv4(),
            label: 'A',
            labelColor: '#ffbf7f',
            items: []
        },
        {
            id: uuidv4(),
            label: 'B',
            labelColor: '#ffdf7f',
            items: []
        },
        {
            id: uuidv4(),
            label: 'C',
            labelColor: '#ffff7f',
            items: []
        },
        {
            id: uuidv4(),
            label: 'F',
            labelColor: '#bfff7f',
            items: []
        },
        {
            id: 'container',
            label: 'container',
            labelColor: 'container',
            items: []
        }
    ]
};

export const rowsReducer = (state = initialState, { type, payload }) => {
    var index;
    var temp;
    var newRow;
    var newStateRows;
    switch (type) {
        case ActionTypes.SET_ROWS:
            return { ...state, rows: payload };
        case ActionTypes.DELETE_ROW:
            state.rows = state.rows.filter(row => row.id !== payload);
            return state;
        case ActionTypes.CLEAR_ROW:
            index = state.rows.findIndex(row => row.id === payload);
            state.rows[state.rows.length - 1].items = [...state.rows[state.rows.length - 1].items, ...state.rows[index].items]; //state.rows.length-1 is index of image container
            state.rows[index].items = [];
            return state;
        case ActionTypes.UP_ROW:
            newStateRows = state.rows;
            index = newStateRows.findIndex(row => row.id === payload);
            if (index > 0) {
                temp = newStateRows[index - 1];
                newStateRows[index - 1] = newStateRows[index];
                newStateRows[index] = temp;
            }
            return {...state, rows: [...newStateRows]}; //redux hidden rules: must return 3 dots to make it detect changes
        case ActionTypes.DOWN_ROW:
            newStateRows = state.rows;
            index = newStateRows.findIndex(row => row.id === payload);
            if (index < newStateRows.length - 2) { //instead of -1 because cannot touch image container which located in last index of the array
                temp = newStateRows[index + 1];
                newStateRows[index + 1] = newStateRows[index];
                newStateRows[index] = temp;
            }
            return {...state, rows: [...newStateRows]}; //redux hidden rules: must return 3 dots to make it detect changes
        case ActionTypes.ADD_TOP_ROW:
            index = state.rows.findIndex(row => row.id === payload);
            newRow = {
                id: uuidv4(),
                label: 'NEW',
                labelColor: '#ff7f7f',
                items: []
            }
            state.rows.splice(index, 0, newRow);
            return state;
        case ActionTypes.ADD_BOTTOM_ROW:
            index = state.rows.findIndex(row => row.id === payload);
            newRow = {
                id: uuidv4(),
                label: 'NEW',
                labelColor: '#ff7f7f',
                items: []
            }
            state.rows.splice(index + 1, 0, newRow);
            return state;
        default:
            return state;
    }
}