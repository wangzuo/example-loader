import React from 'react';
import { render } from 'react-dom';
import ButtonExample, { Code } from './button.example';

const App = () => (
  <div>
    <h1>Example Loader</h1>
    <ButtonExample />
    <Code />
  </div>
);

render(<App />, document.getElementById('app'));
