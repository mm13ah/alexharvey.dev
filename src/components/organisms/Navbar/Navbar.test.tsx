import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('should render', () => {
    render(<Navbar />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
