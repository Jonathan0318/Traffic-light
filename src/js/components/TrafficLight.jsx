import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const lights = ["red", "green", "yellow"];
const durations = {
  red: 3000,
  green: 3000,
  yellow: 1000,
};

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = lights.indexOf(activeLight);
      const nextIndex = (currentIndex + 1) % lights.length;
      setActiveLight(lights[nextIndex]);
    }, durations[activeLight]);

    return () => clearTimeout(timer);
  }, [activeLight]);

  return (
    <>
      <div className="traffic-light-container">
        <div className="traffic-light">
          <div className={`light red ${activeLight === "red" ? "active" : ""}`} />
          <div className={`light yellow ${activeLight === "yellow" ? "active" : ""}`} />
          <div className={`light green ${activeLight === "green" ? "active" : ""}`} />
        </div>
        <p className="label">Current light: <strong>{activeLight.toUpperCase()}</strong></p>
      </div>
      <div className="ground"></div>
    </>
  );
};

export default TrafficLight
