import Categories from "../../components/Home/Categories";
import Team from "../../components/Home/Team";
import CustomStepper from "../../components/Shared/CustomStepper";
import PoolLogo from "../../logo.svg";

const Home = () => {
  const Steps = ["Create Project", "Add Team", "Preview & Hire"];

  return (
    <div className="w-full pb-20 space-y-14">
      <img
        src={PoolLogo}
        alt="company_logo"
        className="ml-3 md:ml-20 lg:!ml-48"
      />
      <CustomStepper currentStep={1} steps={Steps} />
      <div className="flex mx-3 md:mx-20 lg:!mx-48 flex-col md:flex-row">
        <div className="w-1/3 pr-5 border-r-2 border-r-verylightGrey">
          <Categories />
        </div>
        <div className="w-2/3 pl-5">
          <Team />
        </div>
      </div>
    </div>
  );
};

export default Home;
