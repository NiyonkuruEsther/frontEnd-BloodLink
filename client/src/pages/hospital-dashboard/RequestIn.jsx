import { useEffect, useState } from "react";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import axios from "axios";
import SideBar from "./SideBar";
import Tooltip from "./Tooltip";

const RequestIn = () => {
  const [bloodRequest, setBloodRequests] = useState([]);

  const [showTooltip, setShowTooltip] = useState(
    Array(bloodRequest.length).fill(false)
  ); //   const [showAddHospitalPopup, setShowAddHospitalPopup] = useState(false);

  useEffect(() => {
    const getBloodRequests = async () => {
      try {
        const data = await axios
          .get(`http://localhost:4000/api/BL/v1/appointment/listAppointments`)
          .then((response) => {
            console.log(response);
            setBloodRequests(response.data.data);
          });
      } catch (error) {
        console.error(error, "arror");
      }
    };
    getBloodRequests();
  }, []);

  return (
    <SideBar>
      <div className=" w-[80vw] max-w-full ml-auto h-screen flex flex-col justify-center items-center">
        <div className=" w-full h-[80vw] px-5   my-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-100">
            <div className="flex justify-between items-center mx-3 my-3">
              {/* search */}

              <div className=" bg-white dark:bg-gray-900">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Search for items"
                  />
                </div>
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-sm text-left rtl:text-right  ">
              <thead className="text-xs text-white uppercase bg-red-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Full name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mobile Number{" "}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>{" "}
                  <th scope="col" className="px-6 py-3 text-center">
                    Blood group{" "}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  {/* <th scope="col" className="px-6 py-3 text-center">
              Donors
            </th> */}
                  <th scope="col" className="px-6 py-3 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bloodRequest.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.fullName}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.mobileNumber}
                      </th>
                      <td className="px-6 py-4">{item.district}</td>
                      <td className="px-6 py-4 text-center">
                        {item.bloodGroup}
                      </td>
                      <td className="px-6 py-4">{item.gender}</td>
                      <td className="px-6 py-4 relative flex justify-center ">
                        <PiDotsThreeCircleVertical
                          className="w-fit text-red-600 text-2xl "
                          onClick={() => {
                            setShowTooltip((prevState) => {
                              const newState = [...prevState];
                              newState[index] = !newState[index];
                              return newState;
                            });
                          }}
                        />
                        {showTooltip[index] && (
                          <Tooltip
                            item={item}
                            setShowTooltip={setShowTooltip}
                          />
                        )}
                      </td>{" "}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>{" "}
        </div>
      </div>
    </SideBar>
  );
};

export default RequestIn;
