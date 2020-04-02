import React from "react";
import "./Palette.css";

import ColorBox from "../ColorBox/ColorBox";

class Palette extends React.Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox name={color.name} background={color.color} />
    ));
    return (
      <div className="Palette">
        {/* Navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
