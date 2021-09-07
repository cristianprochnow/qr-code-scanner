import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToScan() {
    navigation.navigate('Scanner');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Let's scan a code! 😎
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToScan}>
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },

  button: {
    height: 48,
    width: '90%',
    borderRadius: 8,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16
  }
});