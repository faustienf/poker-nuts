import React, { FC } from 'react';
import './grid-button.css';

type Props = {
  hand: [string, string];
  mode: 'suited' | 'offsuited';
};

export const GridButton: FC<Props> = (props) => {
  const {
    hand,
    mode,
  } = props;

  const [firstCard, secondCard] = hand;

  return (
    <button
      type="button"
      className="grid-button"
      data-mode={mode}
      data-equal={firstCard === secondCard}
    >
      <span>{firstCard}</span>
      <span>{secondCard}</span>
    </button>
  );
};
