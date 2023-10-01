
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bai1A from '../BTH-Login/Bai1A';
import Bai1B from '../BTH-Login/Bai1B';
import Bai1C from '../BTH-Login/Bai1C';
import Bai1D from '../BTH-Login/Bai1D';
import Bai1E from '../BTH-Login/Bai1E';
import Bai1E1 from '../BTH-Login/Bai1E1';

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Bai1B></Bai1B> */}
    {/* <Bai1C></Bai1C> */}
    <Bai1E1></Bai1E1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
