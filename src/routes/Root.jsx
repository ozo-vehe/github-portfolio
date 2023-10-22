// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";
import { useEffect } from "react";
import { getUser, getRepos } from "../utils/index";

function Root() {
  useEffect(() => {
    const saveToStorage = async () => {
      // Get user and save to local storage
      const user = await getUser();
      localStorage.setItem("user", JSON.stringify(user));
      
      // Get repositories and save to local storage
      const repositories = await getRepos();
      localStorage.setItem("repositories", JSON.stringify(repositories));
    }
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
