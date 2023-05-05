import React from "react";

export const BurgerMenu = ({
  width = "56",
  height = "56",
  fill = "#7B61FF",
  stroke = "#fff",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="10" fill={fill} />
      <path
        d="M21 22L35 22M21 28H35M21 34H35"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
