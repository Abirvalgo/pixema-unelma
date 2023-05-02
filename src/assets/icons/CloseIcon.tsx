import React from "react";

export const CloseIcon = ({
  width = "24",
  height = "24",
  fill = "#AFB2B6",
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6569 16.2429L13.4142 12.0002L17.6569 7.75759C18.0472 7.36727 18.0472 6.7337 17.6569 6.34338C17.2665 5.95305 16.633 5.95305 16.2426 6.34338L12 10.586L7.75736 6.34338C7.36704 5.95305 6.73347 5.95305 6.34315 6.34338C5.95282 6.7337 5.95282 7.36727 6.34315 7.75759L10.5858 12.0002L6.34315 16.2429C5.95212 16.6339 5.95282 17.2668 6.34315 17.6571C6.73347 18.0474 7.36633 18.0481 7.75736 17.6571L12 13.4144L16.2426 17.6571C16.6337 18.0481 17.2665 18.0474 17.6569 17.6571C18.0472 17.2668 18.0479 16.6339 17.6569 16.2429"
        fill={fill}
      />
    </svg>
  );
};
