import React from 'react';
import ReactDOM from 'react-dom';
import AllCarousels from './AllCarousels';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllCarousels />, div);
  ReactDOM.unmountComponentAtNode(div);
});
