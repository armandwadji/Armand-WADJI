import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Overlay from "./components/Overlay/Overlay";
import Header from "./components/Header/Header";
import "aos/dist/aos.css";
import Bubble from "./components/Bubble/Bubble";

function App() {
  //Evenement de loading pour effectuer le darkmode en fonction de l'heure de visite de l'utilisateur
  window.addEventListener("DOMContentLoaded", () => {
    const hours = new Date().getHours();
    if (hours < 7 || hours > 18) {
      document.body.classList.add("darkmode");
      document.querySelector(".darkMode input[type=checkbox]").checked = true;
    }
  });

  //Evenement pour laisser le boutton darmoke en on au cas ou la class darkmode se trouve sur le body
  document.body.addEventListener("click", () => {
    const check = document.querySelector(".darkMode input[type=checkbox]");
    if (document.body.classList.contains("darkmode")) {
      check.checked = true;
    }
  });

  return (
    <>
      <Bubble/>
      <Overlay />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
