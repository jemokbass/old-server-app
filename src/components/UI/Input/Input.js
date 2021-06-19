import React from 'react';

const Input = ({ label, value, onChange }) => {
  return (
    <label className="input">
      <span className="input__label">{label}</span>
      <input
        className="input__area"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
