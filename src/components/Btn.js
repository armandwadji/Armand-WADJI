import React from "react";

const Btn = ({ name, type, clas }) => {
  return (
    <button className={clas ? clas : "btn"} type={type}>
      {name}
    </button>
  );
};

export default Btn;
