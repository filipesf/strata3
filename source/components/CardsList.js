import React from 'react';
import Card from './Card';

const CardsList = props => {
  const card = props.data.map((c, index) =>
    <Card key={index} content={c} />);

  return (
    <section className="l-cards-list">
      {props.data.length > 3 && card}
    </section>
  );
};

export default CardsList;
