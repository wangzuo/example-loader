import React from 'react';

const Button = ({ color, children }) => (
  <button className={`btn-${color}`}>
    {children}
  </button>
);

Button.defaultProps = {
  color: 'gray'
};

export default Button;
