import React, { useState, useEffect } from "react";

function Confetti() {
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    startConfetti();
  }, []);

  const startConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 5000);
  };

  return (
    <>
      {confettiActive && (
        <div className="confetti-container">
          {[...Array(100)].map((_, index) => (
            <div
              key={index}
              className="confetti"
              style={randomConfettiStyle()}
            />
          ))}
        </div>
      )}
    </>
  );
}

const randomConfettiStyle = () => {
  const left = Math.random() * window.innerWidth;
  const top = Math.random() * window.innerHeight;
  const rotation = Math.random() * 360;
  const style = {
    left: `${left}px`,
    top: `${top}px`,
    transform: `rotate(${rotation}deg)`,
    position: "fixed",
    backgroundColor: getRandomColor(),
    width: "10px",
    height: "10px",
    zIndex: "100",
  };
  return style;
};

const getRandomColor = () => {
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Confetti;
