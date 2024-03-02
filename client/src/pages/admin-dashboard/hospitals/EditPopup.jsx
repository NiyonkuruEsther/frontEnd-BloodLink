import { useState } from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";

const EditPopup = ({ setShowEditPopup, item }) => {
  const [formData, setFormData] = useState({
    hospitalName: item.hospitalName,
    district: item.district,
    province: item.province,
    hospitalCode: item.hospitalCode
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api", formData);
      console.log(response.data);
      setShowEditPopup(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      id="popup"
      className="fixed z-[10000] bg-black bg-opacity-50 h-screen w-screen left-0 top-0 flex flex-col items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-5 w-[50vw] bg-white rounded-lg ml-auto flex flex-col"
      >
        <div className="text-black flex justify-between mb-6">
          <h4>Hospital details</h4>
          <MdClose
            fontWeight={900}
            fontSize={30}
            className="cursor-pointer "
            onClick={() => setShowEditPopup(false)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="hospitalName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hospital name
          </label>
          <input
            type="text"
            id="hospitalName"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:!ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="district"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            District
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:!ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="province"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Province
          </label>
          <input
            type="text"
            id="province"
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:!ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="hospitalCode"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hospital Code
          </label>
          <input
            type="text"
            id="hospitalCode"
            name="hospitalCode"
            value={formData.hospitalCode}
            onChange={handleChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-within:!ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
          />
        </div>

        <button
          type="submit"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default EditPopup;
