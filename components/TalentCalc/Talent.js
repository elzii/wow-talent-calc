import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';


import PointsBadge from './PointsBadge'

const Talent = ({ boxSize=64, ...props }) => {
  const {
    onPress,
    title,
    selected,
    maxPoints,
    pointsSpendInTree,
    requiredPoints,
    points,
  } = props

  return <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.90}
  >
    <View
      style={[styles.container, {
        width: boxSize,
        height: boxSize,
        borderWidth: 2,
        borderColor: selected ? 'yellow' : 'transparent'
      }]}
    >
      <PointsBadge
        maxPoints={maxPoints}
        points={points}
      />
    </View>
  </TouchableOpacity>
}

export default Talent




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 4,
  },
})
