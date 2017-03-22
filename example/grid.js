import React from 'react';

export const Row = ({ col, children }) => (
  <div className="row">
    {children}
  </div>
);

export const Col = ({ col, children }) => (
  <div className={`col col-${col}`}>
    {children}
  </div>
);
