import React from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import CreateAccount from "./pages/createAccount";
import AboutGarden from "./pages/aboutGarden";
import Login from "./pages/login";
import Contact from "./pages/contact";
import PageNotFound from "./pages/pageNotFound";
import Navbar from "./components/Navbar";
import CreateGarden from "./pages/createGarden";
import GardenProfile from "./pages/gardenProfile";

import PlantInfo from "./pages/PlantInfo";
import SearchGarden from "./pages/SearchGarden";
import Choice from "./pages/Choice";

function App() {
  return (
    <div className="bg-[#E9EFEA]">
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-garden" element={<AboutGarden />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/create-garden" element={<CreateGarden />} />
          <Route path="/garden-profile" element={<GardenProfile />} />
          {/* <Route path="/create-post" element={<CreatePost />} /> */}
          <Route path="/plantInfo" element={<PlantInfo />} />
          <Route path="/search" element={<SearchGarden />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
