import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import { GoCheck } from "react-icons/go";
import classNames from "classnames";

interface Props {
  steps: string[];
  currentStep: number;
}

const CustomStepper = ({ steps, currentStep }: Props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={currentStep}
        alternativeLabel
        sx={{
          "& .MuiStepConnector-line": {
            borderTopWidth: "2px",
          },
          "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
            borderColor: "#0169FE",
          },
          "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
            borderColor: "#0169FE",
          },
        }}
      >
        {steps.map((label, idx) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={({ active, completed }) => (
                <span
                  className={classNames(
                    active || completed ? "bg-dodgerBlue" : "bg-slate-400",
                    "p-1 rounded-full"
                  )}
                >
                  <GoCheck className="text-white" />
                </span>
              )}
            >{`Step ${idx + 1}`}</StepLabel>
            <p className="font-semibold text-center text-toryBlue">{label}</p>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;
