// Enhanced Full React Website with Tailwind Styling and Visuals for Mahek Bhagchandani

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaUserGraduate, FaGlobeAsia, FaChartLine, FaEnvelopeOpenText, FaFolderOpen, FaPenNib } from "react-icons/fa";
import Home from "./pages/Home";
import Bachelors from "./pages/Bachelors";
import Masters from "./pages/Masters";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-200 font-sans">
        <nav className="bg-gradient-to-r from-blue-900 to-black text-white p-6 flex justify-between items-center shadow-lg">
          <h1 className="text-3xl font-extrabold tracking-wide flex items-center space-x-2">
            <span>Blueprints of Growth</span>
            <FaChartLine className="text-blue-400" />
          </h1>
          <div className="space-x-6 text-lg">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <Link to="/bachelors" className="hover:text-blue-400">Bachelor's</Link>
            <Link to="/masters" className="hover:text-blue-400">Master's</Link>
            <Link to="/portfolio" className="hover:text-blue-400">HR Portfolio</Link>
            <Link to="/blog" className="hover:text-blue-400">Blog</Link>
            <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
