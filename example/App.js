import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Slider from './Slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Slider height={100} autoplay autoplayInterval={2000}>
        <View style={{ backgroundColor: 'red', height: 100, }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={{ backgroundColor: 'blue', height: 100 }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  },
});
