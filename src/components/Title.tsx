import React from 'react';
import {StyleSheet, Text} from 'react-native';
import config from 'react-native-config';

const Title = () => {
  const isFrom = config.APP_CONFIG ?? '';

  return <Text style={styles.text}>I am from {isFrom}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default Title;
