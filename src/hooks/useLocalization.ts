import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {strings} from 'src/locals';
import {alert} from 'src/utils/alert';

const useLocalization = (): [string, Dispatch<SetStateAction<string>>] => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('local');

        if (value) {
          strings.setLanguage(value);
          setSelectedLanguage(value);
        } else {
          await AsyncStorage.setItem('local', 'ქარ');
          strings.setLanguage('ქარ');
          setSelectedLanguage('ქარ');
        }
      } catch (e) {
        alert();
      }
    })();
  }, []);

  return [selectedLanguage, setSelectedLanguage];
};

export default useLocalization;
