import { MdClose } from "react-icons/md";
import React, { useEffect } from "react";
import axios from "axios";

const AddHospitalPopup = ({ setShowAddHospitalPopup }) => {
  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const allHospitalsRequest = await axios.post(
          "http://localhost:4000/api/BL/v1/hospital/addHospital"
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchHospitalData();
  }, []);
  return (
    <div
      id="popup"
      className="fixed z-[10000] bg-black bg-opacity-50 h-screen w-screen left-0 top-0 flex flex-col items-center justify-center "
    >
      <form className="max-w-lg mx-auto p-5 w-[60vw] bg-white rounded-lg ml-auto flex flex-col">
        <div className="text-black flex justify-between mb-6">
          <h4>Hospital Information </h4>
          <MdClose
            fontWeight={900}
            fontSize={30}
            className="cursor-pointer "
            onClick={() => {
              setShowAddHospitalPopup(false);
            }}
          />
        </div>
        <div className="flex gap-3 mb-3">
          <div className="w-full">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hospital Name
            </label>
            <input
              type="text"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hospital Email{" "}
            </label>
            <input
              type="text"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hospital code
          </label>
          <input
            type="text"
            id="location"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
          />
        </div>
        <div className="flex gap-3">
          <div className="w-full mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              city
            </label>
            <input
              type="text"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            />
          </div>
          <div className="w-full mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              province and disctrict
            </label>
            <input
              type="text"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800"
        >
          Register Hospital
        </button>
      </form>
    </div>
  );
};

export default AddHospitalPopup;
