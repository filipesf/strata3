import React, { Component } from 'react';
import NewsAPI from 'newsapi';
import Search from './components/Search';
import CardsList from './components/CardsList';
import './assets/styles/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      articles: [],
      query: ''
    };

    this.newsapi = new NewsAPI('3f21c88dbb144b2d92a6065158741d10');
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });

    setTimeout(() => {
      this.newsapi.v2
        .everything({
          q: this.state.query,
          sortBy: 'relevancy',
          language: 'en',
          pageSize: 9
        })
        .then(response => {
          this.setState({
            data: response,
            articles: response.articles
          });
        });
    }, 500);
  }

  render() {
    return (
      <div>
        <Search onChange={this.handleChange} />
        <CardsList data={this.state.articles} />
      </div>
    );
  }
}

export default App;
