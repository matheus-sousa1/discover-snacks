import "./App.css";
import Revenues from "./components/revenues";
import Carousel from "./carousel/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import myLogo from "./img/Revenues.png";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="myLogo" id="home">
          <img style={{ width: 100 }} src={myLogo} alt="logo" />
        </div>
        <div className="sideBar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

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
        </div>
      </nav>

      <div id="revenue">
        <Revenues />
      </div>
      <div id="tip">
        <Carousel />
      </div>

      <div id="About">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
