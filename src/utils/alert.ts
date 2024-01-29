import {Alert} from 'react-native';

export const alert = () => {
  Alert.alert('', 'Something went wrong, try later.', [
    {
      text: 'Ok',
      style: 'cancel',
    },
  ]);
};
