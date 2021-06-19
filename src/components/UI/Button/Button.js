import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, disabled, type }) => {
  const buttonClass = ['button'];
  return (
    <button
      className={buttonClass.join(' ')}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};

export default Button;
