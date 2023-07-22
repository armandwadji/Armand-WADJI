import React from "react";

const DarkMode = () => {
  const darkModeClass = ( e ) => { document.body.classList[ e.target.checked ? "add" : "remove" ]( "darkmode" ) };

  return (
    <label className="darkMode">
      <input type="checkbox" onClick={(e) => darkModeClass(e)} />
      <span className="check"></span>
    </label>
  );
};

export default DarkMode;
