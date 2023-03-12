import "./App.css";
import Revenues from "./components/revenues";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tip from "./components/tip";
import About from "./components/About";
//import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Revenues />
      <Tip />
      <About />

      <Outlet />
    </div>
  );
}

export default App;
