import React, { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDrop }) => {
  // we only want to show DropArea when we drag a card to it
  // so by default set state to false - to not display
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => {
        setShowDrop(true);
      }}
      onDragLeave={() => {
        setShowDrop(false);
      }}
      // without parameter because we already pass that parameter in previous props - TaskColumn.jsx
      // then we hide the drop area after we drop the card
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      // prevent default behavior of onDragOver event, not allowing us to see the console message
      onDragOver={(e) => e.preventDefault()}
      // if showDrop is true then we display the "drop_area" css
      className={showDrop ? "drop_area" : "hide_drop"}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
