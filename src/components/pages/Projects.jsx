import React, { useRef, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Page.css";

const Projects = ({ children }) => {
  const [content, setContent] = useState(0);
  const contentsRef = useRef(null);
  const totalContents = React.Children.count(children);

  const changeContent = (direction) => {
    console.log("changing content");
    setContent((prevContent) => {
      const newContent =
        (prevContent + direction + totalContents) % totalContents;
      const scrollAmount = contentsRef.current.clientWidth * newContent;
      contentsRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
      return newContent;
    });
  };

  return (
    <div className="page" id="projects">
      <h1>Projects</h1>

      <div className="Contents" ref={contentsRef}>
        {children}
      </div>
      <div className="arrows">
        {content !== 0 && (
          <button className="arrow left" onClick={() => changeContent(-1)}>
            <ArrowBackIosIcon />
          </button>
        )}
        {content !== totalContents - 1 && (
          <button className="arrow right" onClick={() => changeContent(1)}>
            <ArrowForwardIosIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
