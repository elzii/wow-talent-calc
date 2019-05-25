import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';

const PointsBadge = ({ maxPoints, points }) => {

  const conditionalStyles = points < maxPoints
    ? { color: 'green' }
    : { color: 'yellow' }

  return <View style={[
    styles.container,
    (points > 0 && points < maxPoints) ? { borderColor: 'green' } : {},
    points === maxPoints ? { borderColor: 'yellow' } : {}
  ]}>
    <Text
      style={[
        styles.text,
        (points > 0 && points < maxPoints) ? { color: 'green' } : { color: '#f9f9f9' },
        points === maxPoints ? { color: 'yellow' } : {}
      ]}
    >
      {points} / {maxPoints}
    </Text>
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
    // width: 40,
    height: 20,
    paddingHorizontal: 3,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#333',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  }
})