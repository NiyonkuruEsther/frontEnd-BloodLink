import Side_bar from "../../../components/Side_bar";
import Request from "../request/Request";

const ViewBloodRequests = () => {
  return (
    <Side_bar>
      <div className=" w-[80vw] max-w-full ml-auto h-screen flex flex-col justify-center items-center">
        <div className=" w-full h-[80vw] px-5   my-5">
          <Request />
        </div>
      </div>
    </Side_bar>
  );
};

export default ViewBloodRequests;
