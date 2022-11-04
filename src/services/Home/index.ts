import axios from "axios";

export const getEmployeeData = async () => {
  try {
    const response = await axios.get("./emp_data.json");
    return response;
  } catch ({ response }) {
    // throw new Error(response?.data?.error?.message);
    console.log("error");
  }
};
