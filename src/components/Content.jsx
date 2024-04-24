import React from "react";
import { Routes, Route } from "react-router-dom";
import Lab1 from "../pages/lab1";
import Lab2 from "../pages/lab2";
import Lab3 from "../pages/lab3";
import Lab4 from "../pages/lab4";
import Lab5 from "../pages/lab5";
import Lab6 from "../pages/lab6";
import User_update from "./user_update";
import Lab7 from "../pages/lab7";


const Content = () => {
  return (
    <div className="content_main">

      <div className="routs">
        <Routes>
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/lab3" element={<Lab3 />} />
          <Route path="/lab4" element={<Lab4 />} />
          <Route path="/lab5" element={<Lab5 />} />
          <Route path="/lab6" element={<Lab6 />} />
          <Route path="/user_update/:id" target ="_blank" element={<User_update />} />
          <Route path="/lab7" element={<Lab7 />} />
        </Routes>
      </div>


    </div>
  );
};
export default Content;