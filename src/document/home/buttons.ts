import {BackHandler} from 'react-native';

export const buttons = [
  {title: 'Go to Main', onPress: 'Main'},
  {title: 'Go to Credit', onPress: 'Credit'},
  {title: 'Exit', onPress: () => BackHandler.exitApp()},
];
