import React, { FC } from 'react';
import './grid-button.css';

type Props = {
  //
};

export const GridButton: FC<Props> = (props) => {
  const {children} = props;

  return (
    <button
      type="button"
      className="grid-button"
    >
      {children}
    </button>
  );
};
