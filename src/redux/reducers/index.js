import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import { rowsReducer } from "./rowsReducer";
import { settingReducer } from "./settingReducer";
import { titleDescriptionReducer } from "./titleDescriptionReducer";

const reducers = combineReducers({
    images: imageReducer,
    setting: settingReducer,
    rows: rowsReducer,
    titleDescription: titleDescriptionReducer,
});

export default reducers;
