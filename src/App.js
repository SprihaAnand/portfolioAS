import "./App.css";
import "./Home.js";
import "./Navbar.js";
import "./Projects.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Projects from "./Projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
