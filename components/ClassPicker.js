import React, { Fragment } from 'react';
import { SafeAreaView, Alert, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Text, View, Image, LayoutAnimation, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { Button } from 'react-native-elements'
import Modal from 'react-native-modal'

import { CLASSES, CLASS_ICONS, CLASS_COLORS } from './TalentCalc/constants'


export default class ClassPicker extends React.PureComponent {

  state = {
    modalOpened: false,
  }

  onPress = () => {
    this.setState({ modalOpened: true })
  }

  onCloseModal = event => {
    this.setState({ modalOpened: false })
  }
  onShowModal = event => {

  }

  onSelect = (name) => {
    this.props.onSelect && this.props.onSelect(name)
    setTimeout(() => this.onCloseModal(), 20)
  }

  render() {
    const {
      style,
      activeClass = 'Warrior',
    } = this.props

    const { modalOpened } = this.state

    const activeIcon = CLASS_ICONS[activeClass]

    return <View
      style={[styles.container, {

      }, style]}
    >
      <TouchableOpacity
        activeOpacity={0.80}
        onPress={this.onPress}
      >
        <View
          style={[styles.row, {}]}
        >
          <View style={[styles.iconContainer, {}]}>
            <Image source={activeIcon} style={[styles.classIcon]} />
          </View>

          <Text style={[styles.label]}>
            {activeClass}
          </Text>
          <Icon name={'caretdown'} style={[styles.caret]} size={10} color={'#dcdcdc'} />
        </View>
      </TouchableOpacity>


      <Modal
        isVisible={modalOpened}
        backdropColor="#000000"
        backdropOpacity={0.90}
        // animationIn="zoomInDown"
        // animationOut="zoomOutUp"
        // animationInTiming={600}
        // animationOutTiming={600}
        // backdropTransitionInTiming={600}
        // backdropTransitionOutTiming={600}
        onSwipeComplete={this.onCloseModal}
        swipeDirection={['down']}
      >
        <View style={[styles.modalContainer]}>
          {
            CLASSES.map((name) => {

              const isActive = activeClass === name

              return <TouchableOpacity
                key={`picker-${name}`}
                style={[styles.item, {
                  opacity: isActive ? 1 : 0.30,
                }]}
                activeOpacity={0.60}
                onPress={() => this.onSelect(name)}
              >
                <View style={[styles.itemInner, {

                }]}>
                  <Image
                    source={CLASS_ICONS[name]}
                    style={[styles.itemIcon, {
                      borderColor: CLASS_COLORS[name]
                    }]}
                  />
                  <Text style={[styles.itemLabel, {
                    color: CLASS_COLORS[name]
                  }]}>
                    {name}
                  </Text>
                </View>
              </TouchableOpacity>
            })
          }
        </View>

        <TouchableOpacity
          style={[styles.modalCloseButton]}
          onPress={this.onCloseModal}
        >
          <Icon name={'closecircle'} style={[styles.modalCloseIcon]} size={48} color={'#dcdcdc'} />
        </TouchableOpacity>

      </Modal>

    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#010101',
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingRight: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#212121',
  },
  classIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  label: {
    marginHorizontal: 8,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  caret: {

  },
  item: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    borderWidth: 2,
    borderColor: '#eee',
  },
  itemLabel: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 12,
    color: '#ffffff'
  },


  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalCloseButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
})