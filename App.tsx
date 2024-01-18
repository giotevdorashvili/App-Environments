import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Title from '@components/Title';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
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
});

export default App;
