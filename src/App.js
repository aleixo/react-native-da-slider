import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Slider from './Slider';

export default function App() {
  return (
    <View style={styles.container}>
      <Slider
        loop
        autoplay
        height={100}
        autoplayInterval={2000}
        defaultPaginationActiveColor="black"
        defaultPaginationInactiveColor="blue"
        pages={[
          () => <View style={{ backgroundColor: 'red', height: 100, }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'blue', height: 100 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'red', height: 100, }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'blue', height: 100 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'red', height: 100, }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'blue', height: 100 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        ]}
      >
      </Slider>
      <Slider
        pages={[
          () => <View style={{ backgroundColor: 'red', flex: 1 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'blue', height: 100 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'red', flex: 0.5 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'blue', height: 100 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'red', height: 100, }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
          ,
          () => <View style={{ backgroundColor: 'blue', height: 100 }}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        ]}
      >
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
