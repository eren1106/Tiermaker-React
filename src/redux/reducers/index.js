import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import { rowsReducer } from "./rowsReducer";
import { settingReducer } from "./settingReducer";

const reducers = combineReducers({
    images: imageReducer,
    setting: settingReducer,
    rows: rowsReducer,
});

export default reducers;
