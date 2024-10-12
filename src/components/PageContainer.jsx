import React, { useCallback, useEffect, useRef, useState } from "react";
import "./PageContainer.css";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Something from "./pages/Something";
import FloatingBalls from "./FloatingBalls";
import PageContent from "./PageContent";

const PageContainer = ({ changeSection, currentSection }) => {
  const containerRef = useRef(null);
  const [totalSections, setTotalSections] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    (event) => {
      if (isScrolling) return;

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000);

      if (event.deltaY > 0 && currentSection < totalSections - 1) {
        changeSection(currentSection + 1);
      } else if (event.deltaY < 0 && currentSection > 0) {
        changeSection(currentSection - 1);
      }
    },
    [currentSection, isScrolling, totalSections]
  );

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const sectionHeight = window.innerHeight;
      setTotalSections(Math.ceil(containerHeight / sectionHeight));
    }

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="container"
      style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      onWheel={handleScroll}
    >
      <FloatingBalls />
      <AboutMe />
      <Projects>
        <PageContent />
        <PageContent />
        <PageContent />
      </Projects>
      <Something />
      <Something />
    </div>
  );
};

export default PageContainer;
