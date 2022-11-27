import React from "react";
import "./App.css";
import NavbarC from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import AddPost from "./components/pages/AddPost";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/pages/Footer";
import SideNav from "./components/pages/SideNav";
import ShowPost from "./components/pages/ShowPost";
function App() {
  return (
    <div className="container-fluid body-contain">
      <NavbarC />
      <div className="body-container">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/add-post" element={<AddPost/>} />
          <Route exact path="/show-post/:id" element={<ShowPost/>} />
          <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
