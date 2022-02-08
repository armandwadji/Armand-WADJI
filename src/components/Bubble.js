import React from "react";

const Bubble = () => {
  const bubbleMaker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100;

    bubble.style.height = `${size}px`;
    bubble.style.width = `${size}px`;

    bubble.style.top = Math.random() + 50 + "%";
    bubble.style.left = Math.random() + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;

    bubble.style.setProperty("--left", `${Math.random() * 10 * plusMinus}%`);

    setTimeout(() => {
      bubble.remove();
    }, 8000);
  };

  setInterval(bubbleMaker, 5000);

  return (
    <div>
      <span className="bubbles"></span>
    </div>
  );
};

export default Bubble;
