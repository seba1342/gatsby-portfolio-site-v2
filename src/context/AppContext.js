import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext({});

class AppProvider extends Component {
  state = {
    darkMode: false,
    device: `desktop`
  };

  mobileWidth = 768;

  tabletWidth = 1024;

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log(`%c Seb Bailouni `, `background: #faebd7; color: #222222`);

    setTimeout(() => {
      this.updateWindowDimensions();
    });

    document.removeEventListener(`resize`, this.updateWindowDimensions, false);

    window.addEventListener(`resize`, this.updateWindowDimensions, false);
  }

  componentWillUnmount() {
    document.removeEventListener(`resize`, this.updateWindowDimensions, false);
  }

  //
  // Listeners

  updateWindowDimensions = () => {
    let device = `desktop`;

    if (
      window.matchMedia(
        `(min-width: ${this.mobileWidth}px) and (max-width: ${this.tabletWidth}px)`
      ).matches
    ) {
      device = `tablet`;
    } else if (
      window.matchMedia(`(max-width: ${this.mobileWidth - 1}px)`).matches
    ) {
      device = `mobile`;
    }

    this.setState({
      device
    });
  };

  //
  // API

  toggleDarkMode = () => {
    const { darkMode } = this.state;

    this.setState({
      darkMode: !darkMode
    });
  };

  //
  // render/wrapper

  render() {
    const { darkMode, device } = this.state;

    return (
      <AppContext.Provider
        value={{
          darkMode,
          device,
          //
          toggleDarkMode: this.toggleDarkMode
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired
};

export default AppProvider;
