import React from 'react';
import RightSection from '../js/components/rightSection';
import renderer from 'react-test-renderer';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function sum(a, b) {
  return a + b;
}

it('URL changes when tab clicked', () => {
    // expect(sum(1, 2)).toBe(3);
    const Tab = renderer.create(
        <RightSection selectedTab={0} />
    );
});