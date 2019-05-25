import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';

import FullScreenSwiper from '../FullScreenSwiper'

import Page from './Page'



const TALENT_TEMPLATE = {
  enabled: false,
  selected: false,
  maxPoints: 5,
  points: 0,
  requiredPoints: 0,
  requiredPointsInParent: 0,
  title: 'Talent',
  description: 'Talent description',
  style: {},
}



const WARLOCK_TALENTS = [
  [
    0,
    { ...TALENT_TEMPLATE, title: 'Suppression', selected: true, points: 3 },
    { ...TALENT_TEMPLATE, title: 'Improved Corruption', selected: true, points: 5 },
    0
  ],
  [
    { ...TALENT_TEMPLATE, title: '', requiredPoints: 5 },
    { ...TALENT_TEMPLATE, title: '', requiredPoints: 5 },
    { ...TALENT_TEMPLATE, title: '', requiredPoints: 5 },
    { ...TALENT_TEMPLATE, title: '', requiredPoints: 5 },
  ]
]

const DATA = [
  {
    label: 'Tree 1',
    talents: [
      WARLOCK_TALENTS[0],
      WARLOCK_TALENTS[1],
      [0, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]
  },
  {
    label: 'Tree 2',
    talents: [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]
  },
  {
    label: 'Tree 3',
    talents: [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 1],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]
  }
]





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
    pages: PAGES,
    data: DATA,
  }


  constructor(props) {
    super(props)

    const { width, height } = Dimensions.get('window')

    this.state = {
      width,
      height,

      pages: props.pages.map((page,i) => ({
        ...page,
        ...props.data[i],
      }))
    }

  }

  onPressTalent = event => {

  }

  render() {
    const { width, pages } = this.state
    const { data } = this.props

    return <View style={[styles.container]}>
      <FullScreenSwiper
        pages={pages}
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

  pointsBadge: {
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
