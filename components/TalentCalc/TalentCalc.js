import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';

import FullScreenSwiper from '../FullScreenSwiper'

import Layout from './Layout'

import DATA from '../../store/datasets/talent-data.json'

const CLASSES = DATA['classes']


export default class TalentCalcBeta extends React.Component {

  static defaultProps = {
    pages: Array(3).fill().map(x => ({ component: Layout })),
    classes: CLASSES
  }


  constructor(props) {
    super(props)

    const { width, height } = Dimensions.get('window')

    const activeClass = 'Hunter'

    this.state = {
      width,
      height,

      pages: props.pages.map((page,i) => {
        const data = props.classes.find(({ name }) => name === activeClass)
        const { talentTrees, ...rest } = data
        return {
          ...page,
          classInfo: rest,
          data: data.talentTrees[i]
        }
      }),

      activeClass
    }

  }

  onPressTalent = event => {

  }

  render() {
    const { width, pages, activeClass } = this.state
    const { classes } = this.props
    const data = classes.find(({ name }) => name === activeClass)
    const { name } = data

    return <SafeAreaView style={[styles.container]}>

      <View style={[styles.header]}>
        <Text style={[styles.headerText]}>
          {data.name}
        </Text>
      </View>
      <FullScreenSwiper
        pages={pages}
      />

    </SafeAreaView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  header: {
    paddingVertical: 6,
  },

  headerText: {
    fontSize: 20,
    color: '#fff'
  }
})
