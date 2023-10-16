import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { fitnessReducer } from "../reducers/fitnessReducer";
import thunk from "redux-thunk";
const store = createStore(fitnessReducer, applyMiddleware(thunk));

export default store;
