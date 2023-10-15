import { legacy_createStore as createStore } from "redux";
import { fitnessReducer } from "../reducers/fitnessReducer";

const store = createStore(fitnessReducer);

export default store;
