import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Home } from './Home';

describe('Home', () => {
  it.skip('should render', () => {
    render(<Home />);
  });
  it.skip('should match a snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
