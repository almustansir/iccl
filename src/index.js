import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Csr from "./pages/Csr";
import Partners from "./pages/Partners";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="csr" index element={<Csr />} />
      <Route path="partners" element={<Partners />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
