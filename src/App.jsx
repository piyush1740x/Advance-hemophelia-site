import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Symptoms from "./components/Symptoms";
import Treatment from "./components/Treatments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Meetings from "./components/Meetings";
import HemophiliaInfo from "./components/Hemophelia";
import HemophiliaTreatment from "./components/HemophiliaTreatment"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextMeeting from "./components/NextMeeting";
import HemophiliaSymptoms from "./components/HemophiliaSymptoms"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NextMeeting/>
              <About />
              <Symptoms />
               <Treatment/>
              <Contact />
            </>
          }
        />
        {/* Individual routes for other components */}
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/about" element={<About />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hemophelia" element={<HemophiliaInfo/>} />
        <Route path="/HemophiliaTreatment" element={<HemophiliaTreatment/>} />
        <Route path="/HemophiliaSymptoms" element={<HemophiliaSymptoms/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
