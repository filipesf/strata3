import React, { Component, Fragment } from 'react';
import Modal from './Modal';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const c = this.props.content;

    return (
      <Fragment>
        <Modal
          isVisible={this.state.showModal}
          handleClose={this.handleModal}
          content={this.props.content}
        />

        <div
          className="c-card"
          style={{ backgroundImage: `url(${c.urlToImage})` }}
          onClick={this.handleModal}>

          <strong className="c-card__tag">{c.source.name}</strong>
          <article className="c-card__content">
            <h6 className="c-card__title">{c.title}</h6>
            <p className="c-card__description">{c.description}</p>
          </article>
        </div>
      </Fragment>
    );
  }
}

export default Card;
