import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewPhoto from "../pages/NewPhoto";
import React from "react";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/new-photo/:photo" element={<NewPhoto />} />
    </Routes>
  );
}
