import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';

import FullScreenSwiper from '../components/FullScreenSwiper'


const Page = ({ ...props }) => {
  return <View>
    <Text style={{ color: 'white' }}>{JSON.stringify(props, null, 2)}</Text>
  </View>
}


const PAGES = [
  {
    component: Page,
  },
  {
    component: Page,
  },
  {
    component: Page,
  },
]

export default class TalentCalc extends React.Component {

  static defaultProps = {

  }


  constructor(props) {
    super(props)

    const { width, height } = Dimensions.get('window')

    this.state = {
      width,
      height
    }

  }


  render() {

    return <View style={[styles.container]}>
      <FullScreenSwiper
        pages={PAGES}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    alignItems: 'center',
    backgroundColor: '#000000',
    // justifyContent: 'center',
  },

})
