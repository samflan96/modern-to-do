import React from "react";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    ReactJS: { backgroundColor: "#ff1695" },
    NextJS: { backgroundColor: "#fe69ba" },
    NodeJS: { backgroundColor: "#ffabd9" },
    AWS: { backgroundColor: "#ffd3eb" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    // add type="button", so form doesn't submit automatically
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;

// we called it TagName - <Tag tagName="HTML" />
// console.log("props", props);
// props
// Object
// tagName: "HTML"
