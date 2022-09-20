import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";

const reducers = combineReducers({
    images: imageReducer,
});

export default reducers;
