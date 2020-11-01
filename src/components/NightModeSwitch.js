/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { AppContext } from "~context/AppContext";

export default function Switch() {
  const appContext = useContext(AppContext);
  const [checked, setChecked] = useState(false);

  function handleSwitchChange() {
    appContext.toggleDarkMode();
    setChecked(!checked);
  }

  return (
    <label
      aria-checked={checked}
      aria-label="Night mode toggle"
      className="night-mode-switch"
      id="night-mode-switch-label"
      onChange={handleSwitchChange}
      htmlFor="night-mode-switch"
    >
      <input
        aria-label="Night mode"
        checked={checked}
        className="hidden"
        id="night-mode-switch"
        name="night-mode-switch"
        onChange={handleSwitchChange}
        type="checkbox"
      />
      <div
        className={`night-mode-switch__container relative ${
          appContext.darkMode ? `dark-mode` : ``
        }`}
      >
        <div
          className="night-mode-switch__circle bg-dark-grey rounded-full absolute"
          style={{ transform: checked ? `translateX(26px)` : `translateX(0)` }}
        ></div>
      </div>
    </label>
  );
}
