import React, { Fragment } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image, LayoutAnimation } from 'react-native'
import { BlurView } from 'expo'

import { Container, Row } from './common'

export default class TalentCalcTooltip extends React.PureComponent {

  // componentDidUpdate(prevProps) {
  //   if (
  //     prevProps.isVisible !== this.props.isVisible ||
  //     prevProps.location !== this.props.location
  //   ) {
  //     LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  //   }
  // }

  render() {
    const {
      style,
      isVisible = false,
      location = 'bottom',
      data = {}
    } = this.props

    const tooltipStyles = {
      top: {
        top: 8,
        bottom: 'auto',
      },
      bottom: {
        top: 'auto',
        bottom: 8
      }
    }[location]

    const { name, maxRank, currentRank, rankDescription, requirements } = data


    const hasPointsSpent = currentRank > 0

    if ( Object.keys(data).length ) {

      const currentRankDescription = (hasPointsSpent && currentRank <= maxRank)
        ? rankDescription[currentRank - 1]
        : false

      const nextRankDescription = currentRank < maxRank
        ? rankDescription[currentRank]
        : false

      return <View
        pointerEvents={'none'}
        style={[styles.container, tooltipStyles, {
          opacity: isVisible ? 1 : 0
        }, style]}
      >
        <Text style={[styles.text, styles.title]}>
          {name}
        </Text>
        <Text style={[styles.text, styles.description]}>
          {currentRankDescription}
        </Text>
        {
          (hasPointsSpent && currentRank < maxRank) &&
          <Text style={[styles.text, styles.label]}>
            {'Next Rank'}
          </Text>
        }
        {
          nextRankDescription.length &&
            <Text style={[styles.text, styles.description]}>
              {nextRankDescription}
            </Text>
        }

        {
          // {JSON.stringify({ currentRank, maxRank, length: rankDescription.length })}
          // <Text style={[styles.text]}>
          //   {JSON.stringify(data, null, 2)}
          // </Text>
        }

      </View>
    }

    return null

  }
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 8,
    right: 8,
    backgroundColor: 'rgba(19,19,19, 0.80)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255, 0.30)',
    borderRadius: 4,
    minHeight: 100,
    padding: 8,
  },
  title: {
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#ffffff'
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'rgba(255,255,255, 0.80)',
  },
  description: {
    color: '#ffd100',
    marginVertical: 4
  }
})