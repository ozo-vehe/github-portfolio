// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";
import { useEffect } from "react";
import { getUser } from "../utils/index";
import { useLoaderData } from "react-router-dom";

function Root() {
  // Get repositories and save to local storage
  const repositories = useLoaderData();
  localStorage.setItem("repositories", JSON.stringify(repositories));

  useEffect(() => {
    const saveToStorage = async () => {
      // Get user and save to local storage
      const user = await getUser();
      localStorage.setItem("user", JSON.stringify(user));
    };
    saveToStorage();
  }, []);

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
