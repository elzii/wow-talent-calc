import React, { useState, useEffect } from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image } from 'react-native';


import PointsBadge from './PointsBadge'

class Talent extends React.Component {

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
      currentRank = 0
    } = this.props


    const imageSource = getSkillImagePath({ skill: name, classType: classInfo.name, tree })

    // Alert.alert(`${imageSource}`)

    return <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.90}
    >
      <View
        style={[styles.container, {
          width: boxSize,
          height: boxSize,
          borderColor: selected ? 'yellow' : 'transparent'
        }]}
      >
        {
          imageSource &&
          <Image source={{ uri: imageSource }} style={{  width: boxSize - 4, height: boxSize - 4, borderRadius: 4, }} />
        }
        <PointsBadge
          maxPoints={maxRank}
          points={currentRank}
        />
      </View>
    </TouchableOpacity>
  }
}

export default Talent


export function getSkillImagePath({
  skill,
  classType = 'Warrior',
  tree = 'Fury',
  basePath = 'https://s3.amazonaws.com/wow-talent-calc/skill-icons'
}) {
  return `${basePath}/${classType.toLowerCase()}/${tree.replace(/\s/g, '-').toLowerCase()}/${skill.replace(/\s/g, '-').toLowerCase()}.jpg`;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 4,
    borderWidth: 2,
  },
})
