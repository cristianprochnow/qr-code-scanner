import { useRoute } from '@react-navigation/core';
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export function WebViewer() {
  type RouteParams = {
    uri: string
  };

  const route = useRoute();
  const { uri } = route.params as RouteParams;

  return (
    <WebView 
      style={styles.container}
      source={{ uri }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})