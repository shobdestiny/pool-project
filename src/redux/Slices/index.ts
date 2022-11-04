import { combineReducers } from "@reduxjs/toolkit";
import { Employee } from "./EmployeeSlice";

const rootReducer = combineReducers({
  employee: Employee.reducer,
});

export default rootReducer;
