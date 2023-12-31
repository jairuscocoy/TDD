import React, { useEffect } from 'react';
import {render, waitFor} from '@testing-library/react-native';
import AppNavigator from '../index';
import HomeScreen from '../HomeScreen';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WeatherScreen from '../WeatherScreen';

jest.mock('../HomeScreen', () => jest.fn());
jest.mock('../WeatherScreen', () => jest.fn());

describe('AppNavigator', () => {
  test('should render Homescreen by default', async () => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(
      <View testID="mock-home-screen" />,
    );
    const wrapper = render(<AppNavigator />)

    await waitFor(()=>{
      wrapper.getByTestId('mock-home-screen')
    })
  });

  // test('should render WeatherScreen on "weather" route', async ()=>{
  //   (HomeScreen as jest.Mock).mockImplementationOnce(()=>{
  //     const navigation = useNavigation()

  //     useEffect(()=>{
  //       navigation.navigate('Weather')
  //     },[navigation])

  //     return null
  //   })

  //   (WeatherScreen as jest.Mock).mockReturnValueOnce(<View testID="mock-weather-screen"/>)

  //   const wrapper = render(<AppNavigator/>)

  //   await waitFor(()=>{
  //     wrapper.getByTestId('mock-weather-screen')
  //   })
  // })
});
