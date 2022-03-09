/* use React PropTypes for type checking of variables*/
/* handle ‘React eslint error missing in props validation’ error*/
import PropTypes from 'prop-types';

import React, { Component } from 'react';

/*going for a class component to use the state*/
class Table extends Component {
  /*declare default state*/
  state = {
      currentSort: 'default'
  };

  /*method called every time the sort button is clicked*/
  /*it changes the currentSort value to the next one*/
  onSortChange = () => {
      const { currentSort } = this.state;
      let nextSort;

      if (currentSort === 'down') {
          nextSort = 'up';
      } else if (currentSort === 'up') {
          nextSort = 'default';
      } else if (currentSort === 'default') {
          nextSort = 'down';
      }

      this.setState({
          currentSort: nextSort
      });
  };
  render () {
      const { data } = this.props;
      const { currentSort } = this.state;
      const sortTypes = {
          up: {
              class: 'sort-up',
              fn: (a, b) => a.net_worth - b.net_worth
          },
          down: {
              class: 'sort-down',
              fn: (a, b) => b.net_worth - a.net_worth
          },
          default: {
              class: 'sort',
              fn: (a, b) => a
          }
      };

      return (
          data.length > 0 && (
              <table>
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>
                Net Worth
                              <button onClick={this.onSortChange}>
                                  <i className={`fas fa-${sortTypes[currentSort].class}`} />
                              </button>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      {/*map over data*/}
                      {[...data].sort(sortTypes[currentSort].fn).map((p) => (
                          <tr>
                              <td>{p.name}</td>
                              <td>${p.net_worth}b</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          )
      );
  }
}

/* set .propTypes property to this object that has the prop names as the keys and the corresponding prop types as the values.*/
Table.propTypes = {
    data: PropTypes.array
};

export default Table;
