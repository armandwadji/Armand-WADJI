import React, { useEffect } from "react";

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const handleCursor = (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    };

    const handleHover = () => cursor.classList.add("hovered");

    const handleLeave = () => {
      cursor.classList.remove("hovered");
      cursor.style.transition = "0.3s ease-out ";
    };

    window.addEventListener( "mousemove", handleCursor );
    
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });
  }, []);
  return <span className="cursor"></span>;
};

export default Mouse;
