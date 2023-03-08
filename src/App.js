import "./App.css";
import "./Home.js";
import "./Navbar.js";
import "./Projects.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
