import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Section } from './Section';

describe('Section', () => {
  it('should render', () => {
    render(
      <Section title="" text={[]}>
        <span />
      </Section>
    );
  });
  it('should match a snapshot', () => {
    const tree = renderer
      .create(
        <Section title="" text={[]}>
          <span />
        </Section>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
