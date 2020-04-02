import React from "react";
import "./ColorBox.css";

class ColorBox extends React.Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background: background }} className="ColorBox">
        <div className="copy-container"></div>
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
        <div className="see-more">More</div>
      </div>
    );
  }
}

export default ColorBox;
