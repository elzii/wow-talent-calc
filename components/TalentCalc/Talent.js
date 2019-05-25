import React, { Fragment } from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';


import { getSkillImagePath } from './utils'
import { Container, Row } from './common'

import PointsBadge from './PointsBadge'

export default class Talent extends React.Component {

  state = {
    imageSource: null
  }
  componentDidMount() {
    const { name, classInfo, tree } = this.props

  }

  render() {
    const {
      boxSize = 64,
      onPress,
      classInfo,
      tree,
      name,
      maxRank,
      selected,
      requirements,
      skillPointsInTree,
      currentRank = 0
    } = this.props

    const { availableSkillPoints } = classInfo

    const imageSource = getSkillImagePath({ skill: name, classType: classInfo.name, tree })


    const enabled = requirements
      ? (
        Object.keys(requirements).every(key => {
          const req = requirements[key]
          if ( key === 'specPoints' ) {
            return skillPointsInTree >= req
          }
          return true
        })
      )
      : true

    const hasPoints = currentRank > 0
    const isMaxRank = maxRank === currentRank


    return <TouchableOpacity
      onPress={onPress}
      disabled={!enabled}
      // onPress={() => Alert.alert(JSON.stringify(skillPointsInTree, null, 2))}
      activeOpacity={0.80}
    >
      <View
        style={[styles.container, {
          width: boxSize,
          height: boxSize,
          opacity: enabled ? 1.0 : 0.25,
          // borderColor: isMaxRank ? 'yellow' : 'transparent',
        }]}
      >
        {
          imageSource &&
          <Fragment>
            <Image
              source={{ uri: imageSource }}
              style={{
                position: 'absolute',
                width: boxSize - 4,
                height: boxSize - 4,
                borderRadius: 4,
                // tintColor: enabled ? 'hsl(360, 100%, 100%)' : 'hsl(360, 100%, 50%)',
              }}
            />
          </Fragment>
        }
        <PointsBadge
          maxPoints={maxRank}
          points={currentRank}
        />
      </View>
    </TouchableOpacity>
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 4,
    borderWidth: 2,
  },
})
