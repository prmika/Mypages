import React, { useCallback, useEffect, useRef, useState } from "react";
import "./PageContainer.css";
import Page from "./pages/Page";
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
      } else if (
        event.deltaY < 0 &&
        currentSection > 0 &&
        currentSection <= totalSections - 1
      ) {
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
      <Page title="About me">
        <PageContent>
          <p>Hi, I'm a software engineer </p>
        </PageContent>
      </Page>
      <Page title="Projects">
        <PageContent>
          <p>
            This is content use arrows to go to the next content asd
            asdasdasdasdasd asdasdasdasdasdsa sadas
          </p>
        </PageContent>
        <PageContent />
        <PageContent />
      </Page>
      <Page title="Something" />
      <Page title="Something else" />
      <Page title="Contact">
        <PageContent>
          <div>You Can contact me by email or phone</div>
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="Text" placeholder="Message" />
          <button>Send</button>          
        </PageContent>
      </Page>
    </div>
  );
};

export default PageContainer;
