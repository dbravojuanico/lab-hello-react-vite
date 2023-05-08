// src/App.js
import "./App.css";

import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuIcon from "./assets/menu-top-xs.png";
import reactIcon from "./assets/LOGOOK.png";

function App() {
  return (
    <div className="App">
      <section className="section1">
        <nav className="navBar">
          <img src={ironhackLogo} alt="IH logo" />
          <img className="navLogo" src={menuIcon} alt="menu logo" />
        </nav>
        <div>
          <h1>
            Say hello to
            <br /> RactJS
          </h1>
          <p>
            You will learn how to use
            <br /> the most popular frontend library,
            <br /> and become a super Ninja developer
          </p>
          <img className="rotatingLogo" src={reactIcon} alt="react logo" />
          <button>Awesome!</button>
        </div>
      </section>
      <section className="section2">
        <div className="card">
          <img className="logo" src={icon1} alt="Icone one" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="card">
          <img className="logo" src={icon2} alt="Icone two" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
          <img className="logo" src={icon3} alt="Icone three" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className="card">
          <img className="logo" src={icon4} alt="Icone four" />
          <h2>JXS</h2>
          <p>Statically-typed. Designed to run on modern browsers</p>
        </div>
      </section>
    </div>
  );
}
export default App;
