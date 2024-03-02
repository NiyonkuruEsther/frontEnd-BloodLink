import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Group 2410logo.svg";
import "../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const allAdminsRequest = await axios.get(
          "http://localhost:4000/api/BL/v1/admin/listallAdmins"
        );
        const allHospitalsRequest = await axios.get(
          "http://localhost:4000/api/BL/v1/hospital/list"
        );
        console.log(allAdminsRequest, allHospitalsRequest);
        const [adminsResponse, hospitalsResponse] = await axios.all([
          allAdminsRequest,
          allHospitalsRequest
        ]);

        // Assuming the responses contain arrays of users
        const allUsers = [
          ...adminsResponse.data.data,
          ...hospitalsResponse.data.hospitals
        ];
        setAllUsers(allUsers);
      } catch (error) {
        // Handle errors here
        console.error(error);
      }
    };

    fetchAllUsers();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/BL/v1/auth/login",
        { email: formData.email, password: formData.password }
      );
      const user = allUsers.find((item) => formData.email === item.email);
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(user));
      if (user.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/hospital/dashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex-1 flex flex-col justify-center items-center h-full">
        <div className="cover">
          <form
            action=""
            method="post"
            className="input3"
            onSubmit={handleSubmit}
          >
            <Link to={"/home"}>
              <section className="section_sign_in">
                <div className="logo">
                  <img className="img" src={Logo} alt="logo" />
                </div>
              </section>
            </Link>

            <h2>Sign in</h2>
            <input
              type="text"
              className="ring-1 ring-red-500 focus-within:ring-4 focus-within:ring-red-500 border-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="username"
            />
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="ring-1 ring-red-500 focus-within:ring-4 focus-within:ring-red-500 border-none"
            />
            <br />
            <p className="text">
              Forgot password?{" "}
              <a href="/reset-password" style={{ color: "#f82424" }}>
                Click here
              </a>
            </p>
            <br />
            <button
              className="login-btn"
              style={{ background: "#f82424" }}
              type="submit"
            >
              Login
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
