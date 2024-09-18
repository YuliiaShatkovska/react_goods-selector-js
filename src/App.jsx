import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cl from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [isSelectedGood, setIsSelectedGood] = useState('Jam');

  const handleClear = () => setIsSelectedGood('');

  return (
    <main className="section container">
      {!isSelectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {isSelectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = isSelectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cl({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    type="button"
                    className={cl('button', {
                      ' is-info': isSelected,
                    })}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    onClick={
                      isSelected ? handleClear : () => setIsSelectedGood(good)
                    }
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
