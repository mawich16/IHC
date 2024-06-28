import React from "react";
import ReactDOM from "react-dom/client";
import "./base.css";

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

/* pages */
import Login from './Login';
import Index from './Index';
import PetInfo from "./PetInfo";
import PetNutrition from "./PetNutrition";
import PetWeighing from "./PetWeighing";
import PetAppointments from "./PetAppointments";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import ErrorPage from "./ErrorPage";
import CalendarPage from './CalendarPage'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/index" element={<Index />} />
        <Route path="/pet/:id" element={<PetRender page="info"/>} />
        <Route path="/pet/:id/info" element={<PetRender page="info"/>} />
        <Route path="/pet/:id/weighing" element={<PetRender page="weight"/>} />
        <Route path="/pet/:id/nutrition" element={<PetRender page="nutrition"/>} />
        <Route path="/pet/:id/appointments" element={<PetRender page="appointments"/>} />
        <Route path="/PetOwner" element={<Profile />} />
        <Route path="/PetOwner/edit" element={<EditProfile />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

function PetRender({page}) {
  const {id} = useParams();
  switch (page) {
    case "info":
      return <PetInfo petID={id} />
    case "weight":
      return <PetWeighing petID={id} />
    case "nutrition":
      return <PetNutrition petID={id} />
    case "appointments":
      return <PetAppointments petID={id} />
  }
}