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
        <div className="myLogo" id="#">
          <img style={{ width: 100}} src={myLogo} alt="logo" />
        </div>
        
          <ul >
          <input type="checkbox" id="checkbox_toggle" />
 <label for="checkbox_toggle" className="hamburger">&#9776;</label>
 <div className="sideBar">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#tip">Clue</a>
            </li>
            <li>
              <a href="#revenue">Revenues</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li><ul className="dropdown">
 <li><a href="/">Home </a></li>
 <li><a href="/">Clue</a></li>
 <li><a href="/">Revenues</a></li>
 <li><a href="/">About</a></li>

 </ul>
   </div>
          </ul>
         
       
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
