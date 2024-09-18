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

  const selected = good => isSelectedGood === good;
  const clearSelectedGood = () => setIsSelectedGood('');

  return (
    <main className="section container">
      {selected('') ? (
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
            onClick={clearSelectedGood}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cl('', {
                'has-background-success-light': selected(good),
              })}
            >
              {selected(good) ? (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearSelectedGood}
                  >
                    -
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setIsSelectedGood(good)}
                  >
                    +
                  </button>
                </td>
              )}

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
