import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LiquidSwipe from './src/LiquidSwipe';

export default function App() {
  return (
    // <View style={{justifyContent: 'center', flex: 1}}>
    //   <Text>
    //     HI
    //   </Text>
    // </View>
    <LiquidSwipe />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
