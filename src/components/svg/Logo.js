/* eslint-disable react/prop-types */
import React from "react";
import { theme } from "../../../tailwind.config";

export default function Logo({
  className,
  color = theme.colors[`antique-white`]
}) {
  return (
    <svg
      className={className}
      width="71"
      height="29"
      viewBox="0 0 71 29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.192 8.74C14.736 8.164 14.112 7.744 13.32 7.48C12.552 7.192 11.82 7.048 11.124 7.048C10.716 7.048 10.296 7.096 9.864 7.192C9.432 7.288 9.024 7.444 8.64 7.66C8.256 7.852 7.944 8.116 7.704 8.452C7.464 8.788 7.344 9.196 7.344 9.676C7.344 10.444 7.632 11.032 8.208 11.44C8.784 11.848 9.504 12.196 10.368 12.484C11.256 12.772 12.204 13.06 13.212 13.348C14.22 13.636 15.156 14.044 16.02 14.572C16.908 15.1 17.64 15.808 18.216 16.696C18.792 17.584 19.08 18.772 19.08 20.26C19.08 21.676 18.816 22.912 18.288 23.968C17.76 25.024 17.04 25.9 16.128 26.596C15.24 27.292 14.196 27.808 12.996 28.144C11.82 28.48 10.572 28.648 9.252 28.648C7.596 28.648 6.06 28.396 4.644 27.892C3.228 27.388 1.908 26.572 0.684 25.444L4.68 21.052C5.256 21.82 5.976 22.42 6.84 22.852C7.728 23.26 8.64 23.464 9.576 23.464C10.032 23.464 10.488 23.416 10.944 23.32C11.424 23.2 11.844 23.032 12.204 22.816C12.588 22.6 12.888 22.324 13.104 21.988C13.344 21.652 13.464 21.256 13.464 20.8C13.464 20.032 13.164 19.432 12.564 19C11.988 18.544 11.256 18.16 10.368 17.848C9.48 17.536 8.52 17.224 7.488 16.912C6.456 16.6 5.496 16.18 4.608 15.652C3.72 15.124 2.976 14.428 2.376 13.564C1.8 12.7 1.512 11.56 1.512 10.144C1.512 8.776 1.776 7.576 2.304 6.544C2.856 5.512 3.576 4.648 4.464 3.952C5.376 3.256 6.42 2.74 7.596 2.404C8.772 2.044 9.984 1.864 11.232 1.864C12.672 1.864 14.064 2.068 15.408 2.476C16.752 2.884 17.964 3.568 19.044 4.528L15.192 8.74ZM38.4199 24.976C37.5559 26.08 36.4639 26.932 35.1439 27.532C33.8239 28.132 32.4559 28.432 31.0399 28.432C29.6959 28.432 28.4239 28.216 27.2239 27.784C26.0479 27.352 25.0159 26.74 24.1279 25.948C23.2639 25.132 22.5799 24.16 22.0759 23.032C21.5719 21.904 21.3199 20.644 21.3199 19.252C21.3199 17.86 21.5719 16.6 22.0759 15.472C22.5799 14.344 23.2639 13.384 24.1279 12.592C25.0159 11.776 26.0479 11.152 27.2239 10.72C28.4239 10.288 29.6959 10.072 31.0399 10.072C32.2879 10.072 33.4159 10.288 34.4239 10.72C35.4559 11.152 36.3199 11.776 37.0159 12.592C37.7359 13.384 38.2879 14.344 38.6719 15.472C39.0559 16.6 39.2479 17.86 39.2479 19.252V20.944H26.7199C26.9359 21.976 27.4039 22.804 28.1239 23.428C28.8439 24.028 29.7319 24.328 30.7879 24.328C31.6759 24.328 32.4199 24.136 33.0199 23.752C33.6439 23.344 34.1839 22.828 34.6399 22.204L38.4199 24.976ZM33.8479 17.272C33.8719 16.36 33.5719 15.58 32.9479 14.932C32.3239 14.284 31.5199 13.96 30.5359 13.96C29.9359 13.96 29.4079 14.056 28.9519 14.248C28.4959 14.44 28.0999 14.692 27.7639 15.004C27.4519 15.292 27.1999 15.64 27.0079 16.048C26.8399 16.432 26.7439 16.84 26.7199 17.272H33.8479ZM42.3158 0.783998H47.7158V12.376H47.7878C48.4118 11.536 49.2038 10.948 50.1638 10.612C51.1478 10.252 52.2038 10.072 53.3318 10.072C54.5798 10.072 55.6958 10.336 56.6798 10.864C57.6638 11.368 58.4918 12.052 59.1638 12.916C59.8598 13.78 60.3878 14.776 60.7478 15.904C61.1318 17.008 61.3238 18.172 61.3238 19.396C61.3238 20.716 61.1198 21.928 60.7118 23.032C60.3038 24.136 59.7158 25.096 58.9478 25.912C58.2038 26.704 57.3038 27.328 56.2478 27.784C55.1918 28.216 54.0158 28.432 52.7198 28.432C52.0958 28.432 51.5078 28.348 50.9558 28.18C50.4038 28.012 49.8878 27.796 49.4078 27.532C48.9518 27.268 48.5438 26.98 48.1838 26.668C47.8478 26.332 47.5718 26.008 47.3558 25.696H47.2838V28H42.3158V0.783998ZM47.2838 19.252C47.2838 20.572 47.6558 21.64 48.3998 22.456C49.1678 23.272 50.2358 23.68 51.6038 23.68C52.9718 23.68 54.0278 23.272 54.7718 22.456C55.5398 21.64 55.9238 20.572 55.9238 19.252C55.9238 17.932 55.5398 16.864 54.7718 16.048C54.0278 15.232 52.9718 14.824 51.6038 14.824C50.2358 14.824 49.1678 15.232 48.3998 16.048C47.6558 16.864 47.2838 17.932 47.2838 19.252ZM63.8755 24.904C63.8755 24.448 63.9595 24.016 64.1275 23.608C64.2955 23.2 64.5235 22.852 64.8115 22.564C65.1235 22.252 65.4835 22.012 65.8915 21.844C66.2995 21.676 66.7315 21.592 67.1875 21.592C67.6435 21.592 68.0755 21.676 68.4835 21.844C68.8915 22.012 69.2395 22.252 69.5275 22.564C69.8395 22.852 70.0795 23.2 70.2475 23.608C70.4155 24.016 70.4995 24.448 70.4995 24.904C70.4995 25.36 70.4155 25.792 70.2475 26.2C70.0795 26.608 69.8395 26.968 69.5275 27.28C69.2395 27.568 68.8915 27.796 68.4835 27.964C68.0755 28.132 67.6435 28.216 67.1875 28.216C66.7315 28.216 66.2995 28.132 65.8915 27.964C65.4835 27.796 65.1235 27.568 64.8115 27.28C64.5235 26.968 64.2955 26.608 64.1275 26.2C63.9595 25.792 63.8755 25.36 63.8755 24.904Z"
        fill={color}
      />
    </svg>
  );
}
