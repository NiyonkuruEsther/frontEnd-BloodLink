import axios from "axios";
import { useEffect, useState } from "react";

const SideBar = ({ children }) => {
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.replace("/home");
  };

  const [bloodRequest, setBloodRequests] = useState([]);

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
    <>
      <aside className="fixed top-0 left-0 z-40 w-[20vw] h-screen transition-transform -translate-x-full sm:translate-x-0 ">
        {/* Side bar */}
        <div className="h-full px-3  flex flex-col justify-center bg-red-800 ">
          <ul className="flex flex-col justify-evenly font-medium overflow-y-hidden text-white h-[80vh]">
            <li>
              <a
                href="/hospital/dashboard"
                className="flex items-center p-2  rounded-lg  "
              >
                <svg
                  className="w-5 h-5 text-white transition duration-75  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 text-xl text-white ">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/hospital/requestIn"
                className="flex items-center p-2  rounded-lg  "
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-xl text-white ">
                  Requests In
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-xl  font-medium text-red-800 bg-white rounded-full dark:bg-red-900 dark:text-red-300">{bloodRequest.length}</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/bood-requests"
                className="flex items-center p-2  rounded-lg  "
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-xl text-white ">
                  Requests Out
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-xl  font-medium text-red-800 bg-white rounded-full dark:bg-red-900 dark:text-red-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="/admin/my-profile"
                className="flex items-center p-2  rounded-lg  "
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-xl text-white ">
                  My Profile
                </span>
              </a>
            </li>

            <li onClick={logOut}>
              <a href="/home" className="flex items-center p-2  rounded-lg  ">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-white transition duration-75  "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap text-xl text-white ">
                  Sign Out
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Rest of content */}
      {children}
    </>
  );
};

export default SideBar;
