import React from 'react';


const Card = props => {
  const c = props.content;

  return (
    <a className="c-card" href="#" style={{backgroundImage: `url(${c.urlToImage})`}}>
      <strong className="c-card__tag">{c.source.name}</strong>

      <article className="c-card__content">
        <h6 className="c-card__title">{c.title}</h6>
        <p className="c-card__description">{c.description}</p>
      </article>
    </a>
  );
};

export default Card;
