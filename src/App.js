import "./App.css";
import "./Home.js";
import "./Navbar.js";
import "./Projects.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer";
import Domains from "./Domains";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Domains />
      <Footer />
    </div>
  );
}

export default App;
