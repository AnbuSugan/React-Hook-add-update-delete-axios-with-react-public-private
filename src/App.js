// App.js
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

import Footer from "./Components/Footer/Footer";

import Register from "./Components/Register/Register";
import AddtoCourses from "./Components/AddtoCourses/AddtoCourses";

import { AuthProvider } from "./Components/auth";
import Login from "./Components/Login/Login";
import { RequireAuth } from "./Components/RequireAuth";
import EditUserForm from "./Components/forms/EditUserForm";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />

        <BrowserRouter>
          <Routes>
            <Route
              path="/AddtoCourses"
              element={
                <RequireAuth>
                  <AddtoCourses />
                </RequireAuth>
              }
            />

            <Route
              path="/Edituser"
              element={
                <RequireAuth>
                  <EditUserForm />
                </RequireAuth>
              }
            />

            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
