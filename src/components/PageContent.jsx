import React from "react";
import "./PageContent.css";

const PageContent = ({ children }) => {
  return (
      <div className="page-content">{children}
        <p>This is content use arrows to go to the next content asd asdasdasdasdasd asdasdasdasdasdsa sadas</p>
      </div>
    );
};

export default PageContent;
