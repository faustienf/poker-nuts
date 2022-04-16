import React, { FC } from 'react';
import { cardsIterator } from '../constants';
import { GridButton } from './grid-button';
import './grid.css';

export const Grid: FC = () => {
  return (
    <table className="grid">
      <tbody>
        {cardsIterator.map((firstCard, rowIndex) => (
          <tr key={firstCard}>
            {cardsIterator.map((secondCard, colIndex) => (
              <td
                key={`${firstCard}${secondCard}`}
                className="grid-cell"
              >
                <GridButton
                  mode={rowIndex > colIndex ? 'offsuited' : 'suited'}
                  hand={rowIndex > colIndex
                    ? [secondCard, firstCard]
                    : [firstCard, secondCard]}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
