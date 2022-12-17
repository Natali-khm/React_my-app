import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./auth_reducer";
import { dialogsReducer } from "./dialogs_reducer";
import { profileReducer } from "./profile_reducer";
import { sidebarReducer } from "./sidebar_reducer";
import { usersReducer } from "./users_reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers);

window.store = store;
export default store;
