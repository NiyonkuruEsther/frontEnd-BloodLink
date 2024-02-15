import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Documentation from "./pages/Documentation.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Donate_blood from "./pages/Donate_blood.jsx";
import Hospitalsignup1 from "./pages/hospitalsignup1.jsx";
import EditProfile from "./pages/admin-dashboard/profile/index.jsx";
import ViewHospitals from "./pages/admin-dashboard/hospitals/index.jsx";
import AdminDashBoard from "./pages/admin-dashboard/dashboard/index.jsx";
import ViewBloodRequests from "./pages/admin-dashboard/request/index.jsx";

// const isAuthenticated = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/documentation" element={<Documentation />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/hospitalsignup1" element={<Hospitalsignup1 />} />
        <Route exact path="/donate_blood" element={<Donate_blood />} />

        {/* {isAuthenticated && ( */}
        <Route exact path="/admin/dashboard" element={<AdminDashBoard />} />
        <Route exact path="/admin/my-profile" element={<EditProfile />} />
        <Route exact path="/admin/hospitals" element={<ViewHospitals />} />
        <Route
          exact
          path="/admin/bood-requests"
          element={<ViewBloodRequests />}
        />

        {/* )} */}
      </Routes>
    </Router>
  </React.StrictMode>
);
