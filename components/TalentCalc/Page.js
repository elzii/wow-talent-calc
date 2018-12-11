import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';

import Talent from './Talent'
import * as constants from './constants'

const Row = ({ children, style, ...props }) => {
  return <View
    style={[styles.row, style, {}]}
  >
    {children}
  </View>
}



const Empty = ({ boxSize=constants.BOX_SIZE, ...props }) => {
  return <View style={[styles.empty, { width: boxSize, height: boxSize }]} />
}



const Page = ({ talents, label, onPress, ...props }) => {

  const NUMBER_OF_ROWS = 7

  return <View
    style={[styles.container, {} ]}
  >
    <Text>{label}</Text>

    {
      talents.map((row, t) => {
        return <Row
          key={`talents-${t}`}
        >
          {row.map((talent, i) => {
            if ( talent ) {
              const props = typeof talent === 'object' ? talent : {}
              return <Talent
                key={`talent-${i}-${t}`}
                onPress={onPress}
                {...props}
              />
            }
            return <Empty key={`talent-${i}-${t}`} />
          })}
        </Row>
      })
    }
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
  },

})

export default Page