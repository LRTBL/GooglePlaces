import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const Loading = ({message}) => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator color="#ed5f3d" size={60} />
    <Text style={styles.loadingText}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  loadingText: {
    fontFamily: 'PublicaSans-Bold',
    fontSize: 18,
    marginTop: 10,
  },
});

export default Loading;
