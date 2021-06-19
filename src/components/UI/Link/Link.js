import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Link = ({ children, to, exact }) => {
  return (
    <NavLink exact={exact} className="link" to={to}>
      {children}
    </NavLink>
  );
};

Link.defaultProps = {
  children: '',
  to: '/',
  exact: true,
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  exact: PropTypes.bool,
};

export default Link;
