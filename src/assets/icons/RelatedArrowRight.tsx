import React from "react";

export const RelatedArrowRight = ({
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
        d="M14.5 17L19.5 12M19.5 12L14.5 7M19.5 12H3"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
