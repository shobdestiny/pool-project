import { createSlice } from "@reduxjs/toolkit";

interface EmployeePayload {
  id: string;
  first_name: string;
  last_name: string;
  designation: string;
  profile_image_url: string;
  experience: number;
  lead: boolean;
}
interface EmployeeInitial {
  "UI/UX Designer": EmployeePayload[];
  "Front End Developer": EmployeePayload[];
  "Back End Developer": EmployeePayload[];
  "Mobile Developers": EmployeePayload[];
  "Project Manager": EmployeePayload[];
  "Dev Ops": EmployeePayload[];
  "QA/Tester": EmployeePayload[];
}
const initialState: EmployeeInitial = {
  "UI/UX Designer": [],
  "Front End Developer": [],
  "Back End Developer": [],
  "Mobile Developers": [],
  "Project Manager": [],
  "Dev Ops": [],
  "QA/Tester": [],
};
export const Employee = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEmployee: (
      state: any,
      action: { type: string; payload: EmployeePayload }
    ) => {
      const employee_data = state[action.payload.designation].find(
        (emp: any) => emp.id === action.payload.id
      );
      if (employee_data) return;
      else
        state[action.payload.designation].push({
          ...action.payload,
          lead: false,
        });
    },
    removeEmployee: (
      state: any,
      action: { type: string; payload: { id: string; designation: string } }
    ) => {
      state[action.payload.designation] = state[
        action.payload.designation
      ].filter((emp: any) => emp.id !== action.payload.id);
    },
    makeLead: (
      state: any,
      action: { type: string; payload: { id: string; designation: string } }
    ) => {
      state[action.payload.designation] = state[action.payload.designation].map(
        (emp: any) => {
          if (emp.id === action.payload.id) {
            return {
              ...emp,
              lead: true,
            };
          } else {
            return { ...emp, lead: false };
          }
        }
      );
    },
  },
});

export const { addEmployee, removeEmployee, makeLead } = Employee.actions;
