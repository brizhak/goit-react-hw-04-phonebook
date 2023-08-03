import React from 'react';
/* import PropTypes from 'prop-types'; */
import style from './Filter.module.css';

const Filter = ({ filter, handleFilter }) => {
  return (
    <>
      <label className={style.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Enter name"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};

export default Filter;
