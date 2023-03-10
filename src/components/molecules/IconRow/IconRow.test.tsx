import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { IconRow } from './IconRow';

describe('IconRow', () => {
  it('should render', () => {
    render(
      <IconRow title="">
        <span />
      </IconRow>
    );
  });
  it('should match a snapshot', () => {
    const tree = renderer
      .create(
        <IconRow title="">
          <span />
        </IconRow>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
