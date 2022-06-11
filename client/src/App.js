import React from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Grid container spacing={2}>
            <Navbar />
          </Grid>
        </Container>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
