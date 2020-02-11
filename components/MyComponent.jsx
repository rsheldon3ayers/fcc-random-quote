import React from "react";
import Text from "./Text.jsx";
import NewQuote from "./NewQuote.jsx";
import TweetQuote from "./TweetQuote.jsx";

import axios from "axios";

const quotedb = "./quotes.json";
class QuoteBox extends React.Component {
  state = {
    quoteObj: []
  };

  componentDidMount() {
    axios
      .get(quotedb)
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data.quote,
          author: data.author
        });
      });
  }
  render() {
    return (
      <div id="quote-box">
        <Text quote={this.state.quote} author={this.state.author} />
        <NewQuote />
        <TweetQuote />
      </div>
    );
  }
}

export default QuoteBox;
