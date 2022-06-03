import React from "react";

const DarkMode = () => {
  const darkModeClass = (e) => {
    if (e.target.checked) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  };

  return (
    <label className="darkMode">
      <input type="checkbox" onClick={(e) => darkModeClass(e)} />
      <span className="check"></span>
    </label>
  );
};

export default DarkMode;
