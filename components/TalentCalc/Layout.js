import React from 'react';
import { Alert, SafeAreaView, Dimensions, TouchableOpacity, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { BlurView } from 'expo'

import { getTreeBackgroundImagePath } from './utils'
import { Container, Row } from './common'
import Talent from './Talent'
import * as constants from './constants'


const Empty = ({ boxSize=constants.BOX_SIZE, ...props }) => {
  return <View style={[styles.empty, { width: boxSize, height: boxSize }]} />
}


export default function Layout ({
  data,
  classInfo,
  onPressTalent,
  ...props
}) {
  const { id, name, skillPoints, skills } = data

  const rows = [ ...new Set(skills.map(({ position }) => position[0])) ].sort()
  const maxRows = Math.max( ...rows)
  const columns = [ ...new Set(skills.map(({ position }) => position[1])) ].sort()
  const maxColumns = Math.max( ...columns)


  const backgroundImageSource = getTreeBackgroundImagePath({
    classType: classInfo.name,
    tree: name
  })


  return <Container>

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
                skillPointsInTree={skillPoints}
                // onPress={() => Alert.alert(JSON.stringify(talent, null, 2))}
                onPress={() => onPressTalent({ tree: name, talent })}
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


  </Container>
}


const styles = StyleSheet.create({

})
