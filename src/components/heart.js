import React, { useState, useEffect } from "react";

function Heart() {
  const [heartActive, setHeartActive] = useState(false);

  useEffect(() => {
    startHeart();
  }, []);

  const startHeart = () => {
    setHeartActive(true);
    setTimeout(() => {
      setHeartActive(false);
    }, 1000);
  };

  return (
    <>
      <style>
        {`
          .heart {
            position: fixed;
            width: 20px;
            height: 20px;
            background-color: red;
            transform: rotate(-45deg);
          }

          .heart:before,
          .heart:after {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: red;
            border-radius: 50%;
          }

          .heart:before {
            top: -10px;
            left: 0;
          }

          .heart:after {
            top: 0;
            left: -10px;
          }
        `}
      </style>
      {heartActive && (
        <div className="heart-container">
          {[...Array(100)].map((_, index) => (
            <div key={index} className="heart" style={randomHeartStyle()} />
          ))}
        </div>
      )}
    </>
  );
}

const randomHeartStyle = () => {
  const left = Math.random() * window.innerWidth;
  const top = Math.random() * window.innerHeight;
  const rotation = Math.random() * 360;
  const style = {
    left: `${left}px`,
    top: `${top}px`,
    transform: `rotate(${rotation}deg)`,
    position: "fixed",
    zIndex: "100",
  };
  return style;
};

export default Heart;
