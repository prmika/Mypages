import React, { useCallback, useState } from "react";
import "./App.css";
import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const changeCurrentSection = (sectionIndex) => {
    setCurrentSection(sectionIndex);
  };

  return (
    <>
      <Navbar handleNavClick={changeCurrentSection} />
      <PageContainer
        changeSection={changeCurrentSection}
        currentSection={currentSection}
      />
    </>
  );
}

export default App;
