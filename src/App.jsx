import { useState } from "react";
import "./index.css";
import "./styles/futuristic.css";
import AuroraBackground from "./components/modern/AuroraBackground";
import RibbonsArrowTracker from "./components/modern/RibbonsArrowTracker";
import SideBar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";  
import Certificates from "./pages/Certificates";

function App() {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <AuroraBackground intensity="medium">
      <RibbonsArrowTracker>
        <main>
          <SideBar />
          <div className="main-content">
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            {activeSection === "About" && <About />}
            {activeSection === "Skills" && <Skills />}
            {activeSection === "Projects" && <Projects />}
            {activeSection === "Achievements" && <Achievements />}
            {activeSection === "Contact" && <Contact />}
          </div>
        </main>
      </RibbonsArrowTracker>
    </AuroraBackground>
  );
}

export default App;
