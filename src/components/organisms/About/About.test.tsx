import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { About } from './About';

describe('About', () => {
  it('should render', () => {
    render(<About />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
