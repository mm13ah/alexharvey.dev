import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Home } from './Home';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
