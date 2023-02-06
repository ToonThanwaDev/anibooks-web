import React, { useCallback } from "react";
import "../components/Xmark.css";

const CloseButton = () => {
  const handleClick = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <span className="close-button topright" onClick={handleClick}>
      &times;
    </span>
  );
};

export default CloseButton;
