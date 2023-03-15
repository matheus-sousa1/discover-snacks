import "./App.css";
import Revenues from "./components/revenues";

import Tip from "./components/tip";
import About from "./components/About";
import Footer from "./components/Footer";
import myLogo from "./img/Revenues.png";

function App() {
  return (
    <div className="App">
      <div className="myLogo">
        <img style={{ width: 100 }} src={myLogo} alt="logo" />
      </div>

      <ul>
        <li>
          <a href="#tip">Tips</a>
        </li>
        <li>
          <a href="#revenue">revenues</a>
        </li>
        <li>
          <a href="#About">about</a>
        </li>
      </ul>
      <div id="revenue">
        <Revenues />
      </div>
      <div id="tip">
        <Tip />
      </div>

      <div id="About">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
