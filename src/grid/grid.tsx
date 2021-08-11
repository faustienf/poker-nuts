import React, { FC } from 'react';
import { cardsIterator } from '../constants';
import { GridButton } from './grid-button';
import './grid.css';

export const Grid: FC = () => {
  return (
    <table className="grid">
      <tbody>
        {cardsIterator.map((firstCard) => (
          <tr key={firstCard}>
            {cardsIterator.map((secondCard) => (
              <td 
                key={`${firstCard}${secondCard}`}
                className="grid-cell"
              >
                <GridButton>
                  {firstCard}{secondCard}
                </GridButton>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
