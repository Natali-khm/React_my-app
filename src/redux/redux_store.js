import { combineReducers, legacy_createStore as createStore } from "redux";
import { dialogsReducer } from "./dialogs_reducer";
import { profileReducer } from "./profile_reducer";
import { sidebarReducer } from "./sidebar_reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
