import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { BlurView } from 'expo'

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


const Layout = ({ data, classInfo, ...props }) => {

  const NUMBER_OF_ROWS = 7
  const { id, name, skills } = data


  const rows = [ ...new Set(skills.map(({ position }) => position[0])) ].sort()
  const maxRows = Math.max( ...rows)
  const columns = [ ...new Set(skills.map(({ position }) => position[1])) ].sort()
  const maxColumns = Math.max( ...columns)


  const backgroundImageSource = getTreeBackgroundImagePath({
    classType: classInfo.name,
    tree: name
  })


  return <View
    style={[styles.container, {} ]}
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

            if ( Object.keys(talent).length ) {
              return <Talent
                key={`talent-${row}-${col}-${talent.id}`}
                classInfo={classInfo}
                tree={name}
                onPress={() => Alert.alert(JSON.stringify(talent, null, 2))}
                {...talent}
              />
            } else {
              return <Empty key={`talent-${row}-${col}`} />
            }

          })
          }
        </Row>
      })
    }


  </View>
}


export function getTreeBackgroundImagePath({
  classType = 'Warrior',
  tree = 'Fury',
  basePath = 'https://s3.amazonaws.com/wow-talent-calc/backgrounds'
}) {
  return `${basePath}/background-${classType.toLowerCase()}-${tree.replace(/\s/g, '-').toLowerCase()}.jpg`;
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

export default Layout