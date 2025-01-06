import React from "react";
import Navbar from "./Componets/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CousesPage from "./Pages/CousesPage";


const Home = () => {
 
  return (
    <div className="h-screen w-screen bg-white dark:bg-black/90">
      <Navbar />
      
      <Routes>
          <Route path='' element={<Homepage/> } ></Route>
          <Route path=':id/:course/' element={<CousesPage/>}></Route>
        </Routes>
    </div>
  );
};

export default Home;
