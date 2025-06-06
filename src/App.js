import RyanBio from "./RyanBio";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Education from "./Education";
import HobbiesButton from "./HobbiesButton";
import Footer from "./Footer";
import "./styles.css";


function App() {
  return (
    <> 
      <Navbar></Navbar>
      <div className="main-content">
        <aside className="background-image left"></aside>
        <section className="center-content">
          <RyanBio></RyanBio>
          <Skills></Skills>
          <Education></Education>
          <HobbiesButton></HobbiesButton>
        </section>
        <aside className="background-image right"></aside>
      </div>
      <div className="bottom-background"></div>
      <Footer></Footer>
    </>
  );
}

export default App;
