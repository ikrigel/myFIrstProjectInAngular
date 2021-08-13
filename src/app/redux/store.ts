import { combineReducers, createStore } from "redux";
import { employeesReducer } from "./employees-state";
import { productsReducer } from "./products-state";
import { authReducer } from "./auth-state";


const reducers = combineReducers({ 
    productsState: productsReducer, 
    employeesState: employeesReducer,
    authState: authReducer
 });
const store = createStore(reducers);//here we add all the files to the redux

export default store;