"use client";

import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    const handleMouseMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsCursorVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsCursorVisible(false), 2000);
    };

    const handleMouseOut = () => {
      setIsCursorVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isCursorVisible ? "" : "hidden"}`}
      style={{ left: position.x, top: position.y }}
    >
      <div className="inner-dot"></div>
    </div>
  );
};

export default CustomCursor;
