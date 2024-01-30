import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import 'src/locals/i18n';
import config from 'react-native-config';
import {useTranslation} from 'react-i18next';

import Title from 'src/components/Title';

function App(): React.JSX.Element {
  const {t, i18n, ready} = useTranslation('translation', {useSuspense: false});
  console.log('i18n.language', i18n.language);

  const isFrom = config.APP_CONFIG ?? '';

  const handleLanguageChangePress = () => {
    const newLocal = i18n.language === 'en' ? 'ge' : 'en';
    i18n.changeLanguage(newLocal);
  };

  if (!ready) {
    return (
      <ActivityIndicator color={'black'} style={styles.ActivityIndicator} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={handleLanguageChangePress} style={styles.button}>
        <Text style={styles.text}>{i18n.language === 'en' ? 'ქარ' : 'En'}</Text>
      </Pressable>

      <Title isFrom={t(`app.${isFrom}`)} />

      <View style={styles.questionContainer}>
        <Text style={[styles.text, styles.question]}> {t('app.how')}</Text>
        <Text style={styles.text}>1: {t('app.softBoiledEgg')}</Text>
        <Text style={styles.text}>2: {t('app.boiledEgg')}</Text>
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
