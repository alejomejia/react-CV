import React from "react";

export const getEducationInfo = (name, url) => (
  <>
    <a href={url} target="_blank" rel="noopener noreferrer">
      @{name}
    </a>
  </>
);
