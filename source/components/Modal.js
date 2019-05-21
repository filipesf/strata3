import React from 'react';
import Moment from 'react-moment';

const Modal = props => {
  const c = props.content;
  const classes = props.isVisible ? 'c-modal is-visible' : 'c-modal';

  return (
    <div className={classes}>
      <section className="c-modal__container">
        <span className="c-modal__back" onClick={props.handleClose}>
          ← Back to listing
        </span>

        <figure
          className="c-modal__image"
          style={{ backgroundImage: `url(${c.urlToImage})` }}>

          <section className="c-modal__details">
            <div className="c-modal__date">
              <Moment format="Do MMMM YYYY">{c.publishedAt}</Moment>
            </div>

            <div className="c-modal__source">
              <span>From<strong> {c.source.name}</strong></span>
              {c.author && <span> by<strong> {c.author}</strong></span>}
            </div>
          </section>
        </figure>

        <article className="c-modal__content">
          <h2 className="c-modal__title">{c.title}</h2>
          <p className="c-modal__description">{c.content}</p>

          <a
            className="c-modal__link"
            href={c.url}
            title={c.title}
            rel="noopener"
            onClick={props.handleClose}>
            Read the full article →
          </a>
        </article>
      </section>
    </div>
  );
};

export default Modal;
