import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import { settingReducer } from "./settingReducer";

const reducers = combineReducers({
    images: imageReducer,
    setting: settingReducer,
});

export default reducers;
