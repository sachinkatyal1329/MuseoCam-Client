import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/constants/styles/style'
import Cam from './src/components/Camera/Camera'

export default function App() {
  return (
    <View style={styles.container}>
      <Cam />
      <Text>Test</Text>
      <StatusBar style="auto" />
    </View>
  );
}
