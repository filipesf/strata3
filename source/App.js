import React, { Component } from 'react';
import axios from 'axios';
import './assets/styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      articles: [],
    };

    this.apiUrl =
      'https://newsapi.org/v2/everything?q=brazil&language=en&apiKey=3f21c88dbb144b2d92a6065158741d10';
  }

  componentWillMount() {
    axios.get(this.apiUrl).then(res => {
      this.setState({
        data: res.data,
        articles: res.data.articles
      });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <div />
    );
  }
}

export default App;
