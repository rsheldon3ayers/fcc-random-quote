import React from "react";
// import PropTypes from "prop-types";

class Text extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <p id="text">"{this.props.quote}"</p>
        <p id="author">--{this.props.author}</p>
      </div>
    );
  }
}

export default Text;
