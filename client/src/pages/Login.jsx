import { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
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
      console.log(user.role);
      localStorage.setItem("token", response.token);
      if (user.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/admin/profile", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="mt-5">
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
              className="form-control"
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
            />
            <br />
            <p className="text">
              Forgot password?{" "}
              <a href="" style={{ color: "#f82424" }}>
                Click here
              </a>
            </p>
            <br />
            <button
              className="login-btn"
              style={{ background: "#f82424" }}
              type="submit"
              // onClick={handleButtonClick}
            >
              Login
            </button>
            <br />
            <p className="text">
              Don't have an account? <a href="/hospitalsignup1">Sign Up here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
