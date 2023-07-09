/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/Components/Buttons';

function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Awesome Button"
        icon="airplane-outline"
        color={'#4CAF50'}
        style={styles.shadow}
      />
      <Button
        title="Button With Icon"
        icon="flag-outline"
        iconPosition="right"
        style={[styles.shadow, {shadowColor: '#2ED3FF'}]}
      />
      <Button
        title="Awesome Button"
        color={'#ea1023'}
        style={[styles.shadow, {shadowColor: '#ea1023'}]}
      />
      <Button
        title="Awesome Button"
        loading={true}
        style={[styles.shadow, {shadowColor: '#2ED3FF'}]}
      />
      <Button
        title="Awesome Button"
        isDisabled={true}
        style={[styles.shadow, {shadowColor: '#909096'}]}
      />
      <Button
        title="Awesome Button"
        icon="navigate-outline"
        style={[styles.shadow, {shadowColor: '#2ED3FF'}]}>
        <Text>Children</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 10,
  },
  shadow: {
    shadowColor: '#4CAF50',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    marginVertical: 10,
  },
});

export default App;
