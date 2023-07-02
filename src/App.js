import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Projects from "./Projects";
import Search from "./Search";
import List from "./List";
import Lrpage from "./Lrpage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Projects />} />
            <Route path="/search" element={<Search />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<Lrpage />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/registerform" element={<RegisterForm />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
