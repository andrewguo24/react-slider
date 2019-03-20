import React from "react";
import PropTypes from "prop-types";
import "./App.scss";

export default class App extends React.Component {
  state = {
    isSliderOpen: false,
    isAnimationPerformed: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      isSliderOpen: !prevState.isSliderOpen,
      isAnimationPerformed: true
    }));
  };

  render() {
    const { isSliderOpen, isAnimationPerformed } = this.state;
    return (
      <div>
        <button className="button" onClick={() => this.handleClick()}>
          {isSliderOpen ? "Close" : "Open"}
        </button>
        <div
          className={`container ${isSliderOpen ? "open" : "closed"} ${
            isAnimationPerformed ? "is-animation-performed" : ""
          } `}
        >
          <div className="slider">This is a slider</div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isSliderOpen: PropTypes.bool,
  isAnimationPerformed: PropTypes.bool
};
