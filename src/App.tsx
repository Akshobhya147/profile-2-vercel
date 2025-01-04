import { useState, useEffect } from "react";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import SmartDashcam from "./components/project_components/SmartDashcam";
import BeachVolley from "./components/project_components/BeachVolley";
import BlockPuzzle from "./components/project_components/BlockPuzzle";
import PPS from "./components/project_components/PPS";
import RampMayhem from "./components/project_components/RampMayhem";
import SaveDucky from "./components/project_components/SaveDucky";
import RedChase from "./components/project_components/RedChase";
import Microprocessor from "./components/project_components/Microprocessor";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isIpadPro, setIsIpadPro] = useState(false);

  useEffect(() => {
    // Function to detect screen width and set isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the threshold for mobile size
      setIsTablet(
        (window.innerWidth >= 768 && window.innerWidth < 1024) ||
          (window.innerWidth == 1024 && window.innerHeight == 1366)
      );
      setIsIpadPro(false);
    };

    // Call on resize
    handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/"
          />
        </>
      ),
    },

    {
      path: "/aboutme",
      element: (
        <>
          <AboutMe
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/"
          />
        </>
      ),
    },

    {
      path: "/projects",
      element: (
        <>
          <Projects
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/"
          />
        </>
      ),
    },
    {
      path: "/contactme",
      element: (
        <>
          <ContactMe
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/"
          />
        </>
      ),
    },
    {
      path: "/projects/smartdashcam",
      element: (
        <>
          <SmartDashcam
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },
    {
      path: "/projects/beachvolley",
      element: (
        <>
          <BeachVolley
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },
    {
      path: "/projects/blockpuzzle",
      element: (
        <>
          <BlockPuzzle
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },

    {
      path: "/projects/pps",
      element: (
        <>
          <PPS
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },
    {
      path: "/projects/rampmayhem",
      element: (
        <>
          <RampMayhem
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },
    {
      path: "/projects/saveducky",
      element: (
        <>
          <SaveDucky
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },
    {
      path: "/projects/redchase",
      element: (
        <>
          <RedChase
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },
    {
      path: "/projects/microprocessor",
      element: (
        <>
          <Microprocessor
            isMobile={isMobile}
            isTablet={isTablet}
            isIpadPro={isIpadPro}
            backLink="/projects"
          />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
