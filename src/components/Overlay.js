import React from "react";

const Overlay = () => {
  // PAGE DE TRANSITION POUR PREVENIR DES MULTIPLES CLIQUES
  setTimeout(() => {document.querySelector(".overlay").classList.remove("active")}, 500);
  return <div className="overlay active"></div>;
};

export default Overlay;
