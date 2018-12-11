import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';

const PointsBadge = ({ maxPoints, points }) => {

  const conditionalStyles = points < maxPoints
    ? { color: 'green' }
    : { color: 'yellow' }

  return <View style={[styles.container, {

  }]}>
    <Text style={{ fontSize: 12, fontWeight: 'bold', ...conditionalStyles }}>{points}</Text>
  </View>
}

export default PointsBadge

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -8,
    right: -8,
    width: 20,
    height: 20,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'yellow',
    backgroundColor: '#333',
  },
})