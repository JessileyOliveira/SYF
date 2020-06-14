/**
 * @format
 */

import 'react-native';
import React from 'react';
import Search from '../../src/components/Search';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <Search searchMovie={() => null} value="" onChangeText={e => null} />,
  );
});
