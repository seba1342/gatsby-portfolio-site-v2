/* eslint-disable react/prop-types */

import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { theme } from "../../tailwind.config";
import { AppContext } from "~context/AppContext";
import Logo from "~components/svg/Logo";
import Menu from "~components/Menu";
import NightModeSwitch from "~components/NightModeSwitch";

const Header = () => {
  const appContext = useContext(AppContext);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="w-full flex justify-center items-start top-0 sticky z-50">
      <div
        className={`header bg-dark-grey text-antique-white rounded-sm w-full relative ${
          appContext.darkMode ? `dark-mode` : ``
        } ${menuActive ? `menu-active` : ``}`}
      >
        <header className="flex flex-col items-center p-3 b1 z-10">
          <div className="w-full relative flex flex-row items-center justify-between">
            <button
              className="header__hamburger w-4 h-3 flex flex-col z-20"
              onClick={() => {
                setMenuActive(!menuActive);
              }}
              type="button"
            >
              <div className="header__hamburger--line header__hamburger--line--1" />
              <div className="header__hamburger--line header__hamburger--line--2" />
            </button>
            <Link
              to="/"
              className="header__brand no-underline mx-4 xs:mx-0"
              onClick={() => setMenuActive(false)}
            >
              <Logo
                className="ml-8"
                color={
                  appContext.darkMode
                    ? theme.colors[`dark-grey`]
                    : theme.colors[`antique-white`]
                }
              />
            </Link>
            <NightModeSwitch />
          </div>
        </header>
        <Menu active={menuActive} setActive={setMenuActive} />
      </div>
    </div>
  );
};

export default Header;
