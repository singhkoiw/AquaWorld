import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Countries from "../pages/Countries";
import WaterStations from "../pages/WaterStations";
import CountryDetails from "../pages/CountryDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/stations" element={<WaterStations />} />
      <Route path="/country/:id" element={<CountryDetails />} />
    </Routes>
  );
}