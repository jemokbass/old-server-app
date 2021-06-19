import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ label, selectValue, onChange }) => {
  return (
    <label className="select">
      <span className="select__label">{label}</span>
      <select className="select__area" value={selectValue} onChange={onChange}>
        <option value="Ya">Ya</option>
        <option value="Nine">Nine</option>
      </select>
    </label>
  );
};

Select.defaultProps = {
  label: '',
  value: '',
  onChange: '',
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Select;
