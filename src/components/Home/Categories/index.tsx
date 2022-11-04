import { useQuery } from "react-query";
import { getEmployeeData } from "../../../services/Home";
import { groupBy } from "../../../utils";
import CustomAccordion from "../../Shared/CustomAccordion";

const Categories = () => {
  const { isLoading, data } = useQuery(["emp_data"], getEmployeeData, {
    refetchOnWindowFocus: false,
    retry: false,
    select: (response) => groupBy(response?.data, "designation"),
  });
  return (
    <>
      <p className="pb-10 text-2xl font-bold text-toryBlue">Categories</p>
      <CustomAccordion categoriesData={data} isLoading={isLoading} />
    </>
  );
};

export default Categories;
