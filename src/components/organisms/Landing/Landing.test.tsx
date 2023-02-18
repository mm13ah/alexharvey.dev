import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Landing } from './Landing';

describe('Landing', () => {
  it('should render', () => {
    render(<Landing />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Landing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
