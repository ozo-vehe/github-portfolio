// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";
// import { useEffect } from "react";
// import { getUser } from "../utils/index";
import { useLoaderData } from "react-router-dom";

function Root() {
  // Get repositories and user data and save to local storage
  const { repositories, user } = useLoaderData();
  localStorage.setItem("repositories", JSON.stringify(repositories));
  localStorage.setItem("user", JSON.stringify(user));

  return (
    <>
      <Navbar />
      <Header />
      <TechStack />
      <Outlet />
    </>
  );
}

export default Root;
