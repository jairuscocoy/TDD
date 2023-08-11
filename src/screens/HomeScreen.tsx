import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../constants';
import moment from 'moment';
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherCoordinates from '../components/WeatherCoordinates';

function HomeScreen() {
  const now = moment(new Date());
  return (
    <View testID="home-screen" style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
        <Text style={styles.day}>{now.format('dddd')}</Text>
      </View>
      <WeatherCurrent />
      <Text testID="home-screen-divider" style={styles.divider}>
        Or
      </Text>
      <WeatherCoordinates />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.DARKER_GRAY,
  },
  title: {
    justifyContent: 'flex-end',
  },
  date: {
    color: Colors.GRAY,
    fontSize: 13,
  },
  day: {
    color: Colors.WHITE,
    fontSize: 21,
  },

  divider: {
    color: Colors.WHITE,
    textAlign: 'center',
  },
});
export default HomeScreen;
