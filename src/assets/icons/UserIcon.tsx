import React from "react";

export const UserIcon = ({
  width = "56",
  height = "56",
  stroke = "#ffffff",
  fill = "#7B61FF",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="10" fill={fill} />
      <path
        d="M36 37V35C36 33.9391 35.5786 32.9217 34.8284 32.1716C34.0783 31.4214 33.0609 31 32 31H24C22.9391 31 21.9217 31.4214 21.1716 32.1716C20.4214 32.9217 20 33.9391 20 35V37"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 27C30.2091 27 32 25.2091 32 23C32 20.7909 30.2091 19 28 19C25.7909 19 24 20.7909 24 23C24 25.2091 25.7909 27 28 27Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
