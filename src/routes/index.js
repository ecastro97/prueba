import React from "react";
import { useLocation } from "react-router-dom";
import Weather from "../components/screens/weather";
export default function Routes() {
    const location = useLocation();
    return (
            <Weather/>
    );
  }