/* eslint-disable react/prop-types */
import React from "react";

export default function InspriationItem({
  baseClass,
  image,
  index,
  inspirationKey,
  title,
  url
}) {
  if (baseClass === `Block` && title && image && image.display.url && url) {
    return (
      <a
        className="inspiration__item p-1 py-4 xs:py-6 animation-appear"
        key={inspirationKey}
        href={url}
        rel="noopener noreferrer"
        style={{ animationDelay: `${(index + 1) * 100 + 100}ms` }}
        target="_blank"
      >
        <div className="inspiration__item--elevate">
          <h1 className="inspiration__item__title b1 text-center xs:relative pb-4">
            {title}
          </h1>

          <img
            alt="arena post"
            className="inspiration__item__image m-auto"
            src={image.square.url}
          />
        </div>
      </a>
    );
  }

  return null;
}
