import React from 'react';
import { View} from 'react-native';
import AppNavigations from './navigation/appNavigations'
import {styles} from './styles'



export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigations/>
    </View>
  );
}
