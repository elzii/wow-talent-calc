import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { BlurView } from 'expo'

import { Container, Row } from './common'


function TalentCalcHeader ({
  level = 60,
  availableSkillPoints = 51
}) {

  const pointsTotal = level - 9
  const pointsLeft = pointsTotal - availableSkillPoints

  return <View style={[styles.container]}>
    <Row>
      <View>
        <Text style={[styles.text]}>{availableSkillPoints} / {pointsTotal}</Text>
      </View>
    </Row>
  </View>
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: 40
  },
  text: {
    color: '#ffffff'
  }
})

export default TalentCalcHeader