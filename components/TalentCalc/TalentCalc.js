import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import Immutable from 'immutable'

import FullScreenSwiper from '../FullScreenSwiper'

import Layout from './Layout'
import Header from './Header'

import TALENT_DATA from '../../store/datasets/talents/index.js'


// export default () => <View />

export default class TalentCalcBeta extends React.PureComponent {

  static defaultProps = {
    // pages: Array(3).fill().map(x => ({ component: Layout })),
    name: 'Warrior',
  }


  constructor(props) {
    super(props)

    const { width, height } = Dimensions.get('window')

    const activeClass = this.props.navigation.getParam('activeClass', null)

    const talentData = TALENT_DATA.find(({ name }) => name === activeClass)

    // const talentTrees = Object.assign({}, ...talentData.talentTrees.map(tree => {
    //   return {
    //     [tree.name]: {
    //       ...tree
    //     }
    //   }
    // }))

    const { talentTrees: trees, ...classInfo } = talentData

    this.state = {
      // width,
      // height,

      talentData: Immutable.fromJS(talentData)
    }
  }


  onPressTalent = ({ tree, talent }) => {
    const { talentData } = this.state

    const talentDataJS = talentData.toJS()

    const currentTreeIndex = talentDataJS.talentTrees
      .findIndex(({ name }) => name === tree)

    const currentSkillIndex = talentDataJS.talentTrees[currentTreeIndex].skills
      .findIndex(({ id }) => id === talent.id)


    const path = [
      'talentTrees',
      currentTreeIndex,
      'skills',
      currentSkillIndex,
    ]

    const canRankUp = (talentData.getIn([ ...path, 'maxRank' ]) > talentData.getIn([ ...path, 'currentRank' ]))

    const nextState = talentData
      // Update total skill points spent
      .setIn(
        ['availableSkillPoints'],
        canRankUp ? talentDataJS.availableSkillPoints - 1 : talentDataJS.availableSkillPoints
      )
      // Update skill points in tree
      .setIn(
        ['talentTrees', currentTreeIndex, 'skillPoints'],
        canRankUp
          ? talentData.getIn(['talentTrees', currentTreeIndex, 'skillPoints']) + 1
          : talentData.getIn(['talentTrees', currentTreeIndex, 'skillPoints'])
      )
      // Update current rank of talent
      .setIn(
        [ ...path, 'currentRank' ],
        canRankUp
          ? talentData.getIn([ ...path, 'currentRank' ]) + 1
          : talentData.getIn([ ...path, 'currentRank' ])

      )


    this.setState({ talentData: nextState })

  }

  render() {
    const {
      pointsUsed,
      talentData,
    } = this.state

    const { talentTrees, ...classInfo } = talentData.toJS()

    const pages = talentTrees.map((tree,i) => {
      return {
        component: Layout,
        classInfo: classInfo,
        onPressTalent: this.onPressTalent,
        data: tree
      }
    })


    return <SafeAreaView style={[styles.container]}>

      <Header
        availableSkillPoints={talentData.get('availableSkillPoints')}
      />

      {
        <FullScreenSwiper
          pages={pages}
        />
      }

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
