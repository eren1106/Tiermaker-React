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
    switch (type) {
        case ActionTypes.SET_ROWS:
            return { ...state, rows: payload };
        default:
            return state;
    }
}