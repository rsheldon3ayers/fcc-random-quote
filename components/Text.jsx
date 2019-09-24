import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const quotedb = "./quotes.json";
class Text extends React.Component {
  state = {
    quoteObj: []
  };

  componentDidMount() {
    axios
      .get(quotedb)
      .then(response => response.data)
      .then(data => {
        this.setState({ quoteObj: data });
      });
  }
  render() {
    return (
      <div id="quote-box">
        <p id="text">"{this.state.quoteObj.quote}"</p>
        <p id="author">--{this.state.quoteObj.author}</p>
      </div>
    );
  }
}

Text.PropTypes = {
  quote: PropTypes.string,
  author: PropTypes.string
};
export default Text;
