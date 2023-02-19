import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Contact } from './Contact';

describe('Contact', () => {
  it('should render', () => {
    render(<Contact />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<Contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
