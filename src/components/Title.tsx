import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({isFrom}: {isFrom: string}) => {
  return <Text style={styles.text}>{isFrom}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'black',
  },
});

export default Title;
