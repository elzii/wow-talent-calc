import React, { Fragment } from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { BlurView } from 'expo'
import { Header } from 'react-native-elements'


import { Container, Row } from './common'


import ClassPicker from '../ClassPicker'


function TalentCalcHeader ({
  level = 60,
  availableSkillPoints = 51,
  activeClass = null,
  onSelectClass
}) {

  const pointsTotal = level - 9
  const pointsLeft = pointsTotal - availableSkillPoints

  return <Fragment>
    <Header
      placement="left"
      barStyle="light-content"
      leftComponent={<ClassPicker activeClass={activeClass} onSelect={onSelectClass} />}
      // centerComponent={{ text: activeClass, style: { color: '#fff' } }}
      rightComponent={{ icon: 'share', color: '#fff' }}
      containerStyle={{
        backgroundColor: '#0c0c0c',
        justifyContent: 'space-around',
        borderBottomColor: '#212121',
        paddingVertical: 8
      }}
    />
    {
      // <View style={[styles.container]}>
      //   <Row>
      //     <View>
      //       <Text style={[styles.text]}>{availableSkillPoints} / {pointsTotal}</Text>
      //     </View>
      //   </Row>
      // </View>
    }
  </Fragment>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#090909',
    alignSelf: 'stretch',
    height: 40
  },
  text: {
    color: '#ffffff'
  }
})

export default TalentCalcHeader