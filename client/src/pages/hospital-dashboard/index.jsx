import DashBoard from "./HospitalDashboard";
import SideBar from "./SideBar";

const HospitalDashboard = () => {
  return (
    <SideBar>
      <div className=" w-[80vw] max-w-full ml-auto flex flex-col items-center my-5 overflow-y-hidden">
        <div className="w-full px-5">
          <DashBoard />
        </div>
      </div>
    </SideBar>
  );
};

export default HospitalDashboard;
