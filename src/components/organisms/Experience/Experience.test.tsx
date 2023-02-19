import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Experience } from './Experience';

describe('Experience', () => {
  it('should render', () => {
    render(<Experience />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Experience />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
