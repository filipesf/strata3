import React from 'react';


const Card = props => {
  const c = props.content;

  return (
    <a className="c-card" href="#">
      <strong className="c-card__tag">{c.source.name}</strong>

      <figure
        className="c-card__image"
        style={{backgroundImage: `url(${c.urlToImage})`}}
      />

      <article className="c-card__content">
        <h6 className="c-card__title">{c.title}</h6>
        <p className="c-card__description">{c.description}</p>
      </article>
    </a>
  );
};

export default Card;
