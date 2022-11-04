import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import CustomList from "../CustomList";

interface Props {
  categoriesData: any;
  isLoading: boolean;
}

const CustomAccordion = ({ categoriesData, isLoading }: Props) => {
  const [expanded, setExpanded] = React.useState<number[]>([]);
  const handleChange = (panel: any) => {
    if (expanded.includes(panel)) {
      setExpanded([...expanded.filter((acc) => acc !== panel)]);
      expanded.filter((acc) => acc !== panel);
    } else {
      setExpanded([...expanded, panel]);
    }
  };

  return (
    <>
      {categoriesData &&
        Object.keys(categoriesData).map((categories, idx) => (
          <div key={idx} className="mb-4">
            <Accordion onChange={() => handleChange(idx)}>
              <AccordionSummary
                expandIcon={
                  expanded.includes(idx) ? (
                    <AiOutlineMinusCircle className="text-white" />
                  ) : (
                    <AiOutlinePlusCircle className="text-white" />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{ root: "!h-5" }}
                className="!bg-dodgerBlue !rounded-lg !text-white"
              >
                <Typography>{categories}</Typography>
              </AccordionSummary>
              <AccordionDetails className="!rounded-lg !space-y-4">
                {categoriesData[categories].map((devs: any, idx: number) => (
                  <CustomList key={idx} listData={devs} />
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
    </>
  );
};

export default CustomAccordion;
