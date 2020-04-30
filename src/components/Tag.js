import React from "react";

function Tag({ Icon, tag }) {
  return (
    <span className="tag">
      {Icon && <Icon />}
      <span>{tag}</span>
    </span>
  );
}

export default Tag;
