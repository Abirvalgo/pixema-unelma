import React from "react";

export const ShareIcon = ({
  width = "24",
  height = "24",
  stroke = "#AFB2B6",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.54545"
        cy="11.6363"
        r="2.54545"
        stroke={stroke}
        strokeWidth="2"
      />
      <circle
        cx="16.4544"
        cy="6.54545"
        r="2.54545"
        stroke={stroke}
        strokeWidth="2"
      />
      <circle
        cx="16.4544"
        cy="16.7273"
        r="2.54545"
        stroke={stroke}
        strokeWidth="2"
      />
      <path
        d="M14 16L10.0911 13.5455M10.0911 10.5L14 8"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
