import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ProfilePic } from './ProfilePic';

describe('ProfilePic', () => {
  it('should render', () => {
    render(<ProfilePic />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<ProfilePic />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
