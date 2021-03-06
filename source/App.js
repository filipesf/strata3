import React, { Component } from 'react';
import { debounce } from 'lodash';
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

  handleChange = debounce(text => {
    this.setState({ query: text });
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
  }, 800);

  render() {
    return (
      <div>
        <Search onChange={e => this.handleChange(e.target.value)} />
        {this.state.articles.length > 3 && <CardsList data={this.state.articles} />}
      </div>
    );
  }
}

export default App;
