/* eslint-disable react/prop-types */
import React from "react";
import { theme } from "../../../tailwind.config";

export default function Moon({ className, color = theme.colors[`dark-grey`] }) {
  return (
    <svg
      className={className}
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.11146 0.125061C2.77234 2.1285 2.07172 5.56051 3.60957 8.36952C5.14741 11.1785 8.41616 12.4374 11.3642 11.5463C11.0195 11.8415 10.6392 12.1057 10.2253 12.3324C7.00235 14.0968 2.95924 12.9145 1.19478 9.69154C-0.56969 6.46859 0.612646 2.42548 3.8356 0.661017C4.24955 0.434394 4.67702 0.256382 5.11146 0.125061Z"
        fill={color}
      />
    </svg>
  );
}
