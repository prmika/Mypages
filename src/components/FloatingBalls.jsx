import React, { useEffect, useState } from "react";
import "./FloatingBalls.css";

const FloatingBalls = () => {
  const [balls, setBalls] = useState([]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const getRandomSize = () => {
    return Math.floor(Math.random() * 500) + 50;
  };

  const getRandomPosition = () => {
    return Math.floor(Math.random() * 330); // Random position between 0% and 110%
  };

  const getRandomDuration = () => {
    return Math.floor(Math.random() * 20) + 30; // Random duration between 20s and 50s
  };

  useEffect(() => {
    // Generate balls once and store them in the state
    const generatedBalls = [...Array(100)].map(() => ({
      size: getRandomSize(),
      top: getRandomPosition(),
      left: getRandomPosition(),
      backgroundColor: getRandomColor(),
      duration: getRandomDuration(),
    }));
    setBalls(generatedBalls);
  }, []);

  return (
    <div className="floating-balls">
      {balls.map((ball, i) => (
        <div
          key={i}
          className="ball"
          style={{
            width: ball.size,
            height: ball.size,
            top: `${ball.top}%`,
            left: `${ball.left}%`,
            backgroundColor: ball.backgroundColor,
            animationDuration: `${ball.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingBalls;
