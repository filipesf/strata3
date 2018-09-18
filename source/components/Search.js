import React from 'react';


const Search = props => {
  return (
    <section className="c-search">
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
