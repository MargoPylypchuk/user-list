import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewPhoto from "../pages/Home/NewPhoto";
import React from "react";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new-photo" element={<NewPhoto />} />
    </Routes>
  );
}
