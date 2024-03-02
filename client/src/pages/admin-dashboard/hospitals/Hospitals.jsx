import { useEffect, useState } from "react";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import Tooltip from "./Tooltip";
import axios from "axios";
import AddHospitalPopup from "./AddHospitalPopup";

const Hospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddHospitalPopup, setShowAddHospitalPopup] = useState(false);
  const [hospitalData, setHospitalData] = useState([]);
  const [showTooltip, setShowTooltip] = useState(
    Array(hospitalData.length).fill(false)
  );

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const allHospitalsRequest = await axios.get(
          "http://localhost:4000/api/BL/v1/hospital/list"
        );

        setHospitalData(allHospitalsRequest.data.hospitals);
        console.log(allHospitalsRequest.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitalData();
  }, []);

  const filteredHospitalData = hospitalData.filter((item) =>
    item.hospitalName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Add button */}

        <button
          className="bg-red-600 text-white font-semibold rounded-lg h-fit px-4 py-4"
          onClick={() => setShowAddHospitalPopup(true)}
        >
          + Add Hospital
        </button>
      </div>
      {showAddHospitalPopup && (
        <AddHospitalPopup setShowAddHospitalPopup={setShowAddHospitalPopup} />
      )}

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Hospital name
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Hospital Code
            </th>
            <th scope="col" className="px-6 py-3">
              Donors
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredHospitalData &&
            filteredHospitalData.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.hospitalName}
                  </th>
                  <td className="px-6 py-4">
                    {item.district}-{item.province}
                  </td>
                  <td className="px-6 py-4">{item.hospitalCode}</td>
                  <td className="px-6 py-4 font-semibold">3</td>
                  <td className="px-6 py-4 relative">
                    <a
                      href="#"
                      onClick={() => {
                        setShowTooltip((prevState) => {
                          const newState = [...prevState];
                          newState[index] = !newState[index];
                          return newState;
                        });
                      }}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline text-2xl"
                    >
                      <PiDotsThreeCircleVertical />
                    </a>
                    {showTooltip[index] && (
                      <Tooltip item={item} setShowTooltip={setShowTooltip} />
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Hospitals;
