import React from "react";

export const RelatedArrowLeft = ({
  width = "24",
  height = "24",
  stroke = "#fff",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 17L4.5 12M4.5 12L9.5 7M4.5 12H21"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
