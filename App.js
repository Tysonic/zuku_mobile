import React from 'react';
import { View} from 'react-native';
import Main from './navigation/appNavigations'
import {styles} from './styles'



export default function App() {
  return (
   
      <View style={styles.container}>
              <Main/>

      </View>
    
  );
}
