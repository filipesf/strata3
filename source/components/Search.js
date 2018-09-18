import React from 'react';
import Logo from './Logo';


const Search = props => {
  return (
    <section className="c-search">
      <Logo />

      <input
        className="c-search__input"
        onChange={props.onChange}
        placeholder="What are you looking for? 😏"
        type="text"
      />
    </section>
  );
};

export default Search;
