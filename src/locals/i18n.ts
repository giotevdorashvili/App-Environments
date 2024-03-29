import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {en, ge} from 'src/locals/translations';

import {Alert, NativeModules, Platform} from 'react-native';

export const alert = () => {
  Alert.alert('', 'Something went wrong, try later.', [
    {
      text: 'Ok',
      style: 'cancel',
    },
  ]);
};

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localIdentifier;

const STORE_LANGUAGE_KEY = 'local';

interface LanguageDetectorPlugin {
  type: 'languageDetector';
  async: boolean;
  init: () => void;
  detect: (callback: (lang: string) => void) => Promise<void>;
  cacheUserLanguage: (language: string) => Promise<void>;
}

const languageDetectorPlugin: LanguageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);

      if (language) {
        return callback(language);
      } else {
        return callback(deviceLanguage === 'ka_GE' ? 'ge' : 'en');
      }
    } catch (error) {
      alert();
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {
      alert();
    }
  },
};

const resources = {
  en: {
    translation: en,
  },
  ge: {
    translation: ge,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
