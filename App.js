import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import TalentCalc from './components/TalentCalc'
import Debug from './screens/Debug'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {
          <TalentCalc />
          // <Debug />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
