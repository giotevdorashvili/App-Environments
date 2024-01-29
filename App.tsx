import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {strings} from 'src/locals';
import {alert} from 'src/utils/alert';
import Title from 'src/components/Title';
import useLocalization from 'src/hooks/useLocalization';

function App(): React.JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useLocalization();

  const isFrom = config.APP_CONFIG ?? '';

  const handleLanguageChangePress = () => {
    const newLocal = selectedLanguage === 'En' ? 'ქარ' : 'En';

    strings.setLanguage(newLocal);
    setSelectedLanguage(newLocal);
    AsyncStorage.setItem('local', newLocal).catch(alert);
  };

  if (!selectedLanguage) {
    return (
      <ActivityIndicator color={'black'} style={styles.ActivityIndicator} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={handleLanguageChangePress} style={styles.button}>
        <Text style={styles.text}>
          {selectedLanguage === 'En' ? 'ქარ' : 'En'}
        </Text>
      </Pressable>

      <Title isFrom={strings[isFrom as 'production' | 'development']} />

      <View style={styles.questionContainer}>
        <Text style={[styles.text, styles.question]}>{strings.how}</Text>
        <Text style={styles.text}>1: {strings.softBoiledEgg}</Text>
        <Text style={styles.text}>2: {strings.boiledEgg}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 30,
    backgroundColor: 'white',
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 150,
    marginTop: 50,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
  questionContainer: {
    gap: 5,
  },
  ActivityIndicator: {
    marginTop: '50%',
  },
});

export default App;
