import React from "react";
import "./ColorBox.css";

class ColorBox extends React.Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className="ColorBox">
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default ColorBox;
