/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import config from 'react-native-config';

function App(): React.JSX.Element {
  const isFrom = config.APP_CONFIG ?? '';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>I am from {isFrom}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});

export default App;
