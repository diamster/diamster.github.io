import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RyanBio from "./RyanBio";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Education from "./Education";
import HobbiesButton from "./HobbiesButton";
import Footer from "./Footer";
import "./styles.css";
/*import { Route } from "react-router";*/
import Projects from "./projects";
import Experiences from "./experiences";
/*Importing the different pages*/


function Home() {
  return (
    <> 

      <RyanBio></RyanBio>
      <Skills></Skills>
      <Education></Education>
      <HobbiesButton></HobbiesButton>
    </>
  );
}

/*Function to enable routing between multiple pages*/
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="main-content">
        <aside className="background-image left"></aside>
        <section className="center-content">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/experiences" element={<Experiences></Experiences>} />
          </Routes>
        </section>
        <aside className="background-image right"></aside>
      </div>
      <div className="bottom-background"></div>
      <Footer></Footer>
    </Router>
  );
}
export default App;
