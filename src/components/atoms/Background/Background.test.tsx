import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Background } from './Background';

describe('Background', () => {
  it('should render', () => {
    render(<Background />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Background />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
