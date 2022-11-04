import { Button } from "@mui/material";
import CustomCard from "../../Shared/CustomCard";
import { useSelector } from "react-redux";

const Team = () => {
  const employeeData = useSelector((state: any) => state.employee);
  return (
    <>
      <div className="flex justify-between">
        <p className="pb-10 text-2xl font-bold text-toryBlue">Team Members</p>
        <Button
          variant="contained"
          className="!h-8 !bg-toryBlue !w-40 !capitalize"
        >
          Next
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {Object.keys(employeeData).map((category, idx) => (
          <CustomCard
            key={idx}
            teamTitle={category}
            employeeData={employeeData}
          />
        ))}
      </div>
    </>
  );
};

export default Team;
