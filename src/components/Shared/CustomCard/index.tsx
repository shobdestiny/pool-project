import { Paper } from "@mui/material";
import CustomList from "../CustomList";
import classNames from "classnames";

interface Props {
  teamTitle: string;
  employeeData: any;
}

const CustomCard = ({ teamTitle, employeeData }: Props) => {
  return (
    <Paper elevation={7} className="!h-fit">
      <div className="text-center text-white rounded-t-xl bg-comet">
        {teamTitle}
      </div>
      <div
        className={classNames(
          "flex flex-col px-4",
          employeeData[teamTitle].length === 0 ? "py-0" : "py-2"
        )}
      >
        {employeeData[teamTitle].map((data: any, idx: number) => (
          <CustomList key={idx} listData={data} toggleButtonStyle={true} />
        ))}
      </div>
    </Paper>
  );
};

export default CustomCard;
