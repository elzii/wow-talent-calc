import React, { Fragment } from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableHighlight, StyleSheet, Text, View, ScrollView, Image, Modal } from 'react-native';
import { Tooltip } from 'react-native-elements'
import { LongPressGestureHandler } from 'react-native-gesture-handler'



import { getSkillImagePath } from './utils'
import { Container, Row } from './common'

import PointsBadge from './PointsBadge'

export default class Talent extends React.Component {

  state = {

  }
  componentDidMount() {

    const { name, classInfo, tree } = this.props
  }

  onPress = event => {
    const { pageX, pageY } = event.nativeEvent
    const { width, height } = Dimensions.get('window')
    const isTopHalf = (height / 2) > pageY
    const isLeftHalf = (width / 2) > pageX


    // this.tooltipRef.setState({ isVisible: true })
    // this.tooltipRef.toggleTooltip()
    // console.log(this.tooltipRef.state.isVisible)

    this.props.onPress && this.props.onPress({ isTopHalf })
  }

  onCloseTooltip = () => {
    this.setState({ tooltipOpen: false })
  }

  onOpenTooltip = () => {

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
      currentRank = 0,
      enabled
    } = this.props

    const { tooltipOpen, tooltipLocation } = this.state

    const { availableSkillPoints } = classInfo

    const imageSource = getSkillImagePath({ skill: name, classType: classInfo.name, tree })




    const hasPoints = currentRank > 0
    const isMaxRank = maxRank === currentRank

    // <Tooltip
    //   ref={node => this.tooltipRef = node}
    //   popover={<Text>Info here</Text>}
    //   toggleOnPress={false}
    //   withOverlay={false}
    //   onClose={this.onCloseTooltip}
    //   onOpen={this.onOpenTooltip}
    // >

    //<Modal
    //  animationType="fade"
    //  visible={tooltipOpen}
    //  transparent={true}
    //  onDismiss={this.onCloseTooltip}
    //  onShow={this.onOpenTooltip}
    //  onRequestClose={this.onCloseTooltip}
    //  // pointEvents={'none'}
    //>
    //  <View style={[styles.tooltip, tooltipStyles]} />
    //</Modal>



    return <View>
      <TouchableHighlight
        onPress={this.onPress}
        onLongPress={this.props.onLongPress}
        //underlayColor={'white'}
        // disabled={!enabled}
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

      </TouchableHighlight>
    </View>
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    borderRadius: 4,
    borderWidth: 2,
  },


})
