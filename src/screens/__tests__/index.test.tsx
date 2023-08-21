import React from 'react';
import {render} from '@testing-library/react-native';
import AppNavigator from '../index';
import HomeScreen from '../HomeScreen';
import {View} from 'react-native';

jest.mock('../HomeScreen', () => jest.fn());

describe('AppNavigator', () => {
  test('should render Homescreen by default', async () => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />,
    );
    const wrapper = render(<AppNavigator />);
  });
});
