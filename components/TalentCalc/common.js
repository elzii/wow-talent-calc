import React from 'react';
import { View, StyleSheet, } from 'react-native';

export const Container = ({ children, style, ...props }) => {
  return <View
    style={[styles.container, style, {}]}
    {...props}
  >
    {children}
  </View>
}

export const Row = ({ children, style, ...props }) => {
  return <View
    style={[styles.row, style, {}]}
    {...props}
  >
    {children}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // width: '100%'
  },
})