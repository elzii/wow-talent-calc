import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { BlurView, Haptic } from 'expo'
// import { ForceTouchGestureHandler } from 'react-native-gesture-handler'


import { getTreeBackgroundImagePath } from './utils'
import { Container, Row } from './common'
import Talent from './Talent'
import Tooltip from './Tooltip'
import * as constants from './constants'


const Empty = ({ boxSize=constants.BOX_SIZE, ...props }) => {
  return <View style={[styles.empty, { width: boxSize, height: boxSize }]} />
}


export default class Layout extends React.Component {

  state = {
    tooltipOpen: false,
    tooltipLocation: 'bottom',
    tooltipId: null
  }

  onPress = ({ isTopHalf, name, talent, enabled }) => {
    const { tooltipOpen } = this.state

    // if ( !tooltipOpen ) {}

    this.setState({
      tooltipOpen: true,
      tooltipLocation: isTopHalf ? 'bottom' : 'top',
      tooltipId: talent.id
    })

    if ( enabled ) {
      Haptic.impact(Haptic.ImpactFeedbackStyle.Light)
      this.props.onPressTalent({ tree: name, talent })
    }
  }

  onLongPress = ({ isTopHalf, name, talent, enabled }) => {
    if ( enabled ) {
      Haptic.impact(Haptic.ImpactFeedbackStyle.Light)
      this.props.onPressTalent({ tree: name, talent, decrement: true })
    }
  }

  onCloseTooltip = () => {
    this.setState({ tooltipOpen: false })
  }

  render() {

    const {
      data,
      classInfo,
      onPressTalent,
    } = this.props

    const { tooltipLocation, tooltipOpen, tooltipId } = this.state

    const { id, name, skillPoints, skills } = data

    const rows = [ ...new Set(skills.map(({ position }) => position[0])) ].sort()
    const maxRows = Math.max( ...rows)
    const columns = [ ...new Set(skills.map(({ position }) => position[1])) ].sort()
    const maxColumns = Math.max( ...columns)


    const backgroundImageSource = getTreeBackgroundImagePath({
      classType: classInfo.name,
      tree: name
    })

    const activeTooltipData = {
      ...skills.find(({ id }) => id === tooltipId )
    }

    return <Container
      onStartShouldSetResponderCapture={event => false}
      onStartShouldSetResponder={this.onCloseTooltip}
    >

      <Image source={{ uri: backgroundImageSource }} style={{
        ...StyleSheet.absoluteFillObject,
      }} />
      <BlurView tint="dark" intensity={75} style={StyleSheet.absoluteFill}>
      </BlurView>

      {
        rows.map((row) => {
          const skillsInRow = skills.filter(({ position }) => {
            // Alert.alert(JSON.stringify({ pos: position[0], row }))
            return position[0] === row
          })

          return <Row
            key={`row-${row}`}
            style={{ width: '100%' }}
          >

          {

            columns.map((col, c) => {

              const talent = skillsInRow.find(({ position }) => position[1] === col)
                ? skillsInRow.find(({ position }) => position[1] === col)
                : {}

              const { requirements } = talent


              if ( Object.keys(talent).length ) {

                const enabled = requirements
                  ? (
                    Object.keys(requirements).every(key => {
                      const req = requirements[key]
                      if ( key === 'specPoints' ) {
                        return skillPoints >= req
                      }
                      return true
                    })
                  )
                  : true

                return <Talent
                  key={`talent-${row}-${col}-${talent.id}`}
                  classInfo={classInfo}
                  tree={name}
                  skillPointsInTree={skillPoints}
                  // onPress={() => Alert.alert(JSON.stringify(talent, null, 2))}
                  onPress={({ isTopHalf }) => this.onPress({ isTopHalf, name, talent, enabled })}
                  onLongPress={({ isTopHalf }) => this.onLongPress({ isTopHalf, name, talent, enabled })}
                  {...talent}
                  enabled={enabled}
                />
              } else {
                return <Empty key={`talent-${row}-${col}`} />
              }

            })
            }
          </Row>
        })
      }


      <Tooltip
        style={[{}]}
        isVisible={tooltipOpen}
        location={tooltipLocation}
        data={activeTooltipData}
      />


    </Container>
  }
}


const styles = StyleSheet.create({

})
