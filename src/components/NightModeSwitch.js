/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { AppContext } from "~context/AppContext";
import Moon from "~components/svg/Moon";
import Sun from "~components/svg/Sun";
import { theme } from "../../tailwind.config";

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
        className={`night-mode-switch__container relative flex flex-row justify-between items-center ${
          appContext.darkMode ? `dark-mode` : ``
        }`}
      >
        <div
          className="night-mode-switch__circle bg-dark-grey rounded-full absolute"
          style={{ transform: checked ? `translateX(23px)` : `translateX(0)` }}
        />
        <div
          style={{
            transform: checked ? `translateX(6px)` : `translateX(30px)`
          }}
        >
          {checked ? (
            <Sun color={theme.colors[`antique-white`]} />
          ) : (
            <Moon color={theme.colors[`dark-grey`]} />
          )}
        </div>
      </div>
    </label>
  );
}
