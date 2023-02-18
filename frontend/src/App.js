import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import CreateAccount from "./pages/createAccount";
import AboutGarden from "./pages/aboutGarden";
import Login from "./pages/login";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pageNotFound";

function App() {
  return (
    <div class="container mx-auto">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/newaccount" element={<CreateAccount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutgarden" element={<AboutGarden />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
