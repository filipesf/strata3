import React from 'react';
import Logo from './Logo';


const Search = props => {
  return (
    <section className="c-search">
      <Logo />

      <input
        className="c-search__input"
        onChange={props.onChange}
        placeholder="Search for the latest news on the web 🤓"
        type="text"
      />
    </section>
  );
};

export default Search;
