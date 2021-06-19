import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ label, value, onChange }) => {
  return (
    <label className="textarea">
      <span className="textarea__label">{label}</span>
      <textarea className="textarea__area" value={value} onChange={onChange} />
    </label>
  );
};

Textarea.defaultProps = {
  label: '',
  value: '',
  onChange: '',
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Textarea;
