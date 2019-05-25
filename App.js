import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

import { createAppContainer, createStackNavigator, createBottomTabNavigator, withNavigation } from 'react-navigation'

import TalentCalc from './components/TalentCalc'
import Debug from './screens/Debug'


export class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={styles.container}>

        <TalentCalc navigation={this.props.navigation}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const WarriorStack = () => null
const HunterStack = () => null
const RogueStack = () => null
const ShamanStack = () => null
const PriestStack = () => null
const WarlockStack = () => null
const MageStack = () => null
const DruidStack = () => null


const TabBarIcon = ({ navigation, to, source, focused, size = 24, ...props }) => {
  return <View style={{
    opacity: focused ? 1 : 0.5
  }}>
    <Image source={source} style={{ width: size, height: size }}/>
  </View>
}

// const HomeStack = createStackNavigator({
//   Home: {
//     screen: Home,
//   },
//   Warrior: {
//     screen: WarriorStack
//   },
//   Hunter: {
//     screen: HunterStack
//   },
//   Rogue: {
//     screen: RogueStack
//   },
//   Shaman: {
//     screen: ShamanStack
//   },
//   Priest: {
//     screen: PriestStack
//   },
//   Warlock: {
//     screen: WarlockStack
//   },
//   Mage: {
//     screen: MageStack
//   },
//   Druid: {
//     screen: DruidStack
//   }

// }, {
//   defaultNavigationOptions: {
//   headerStyle: {
//     backgroundColor: '#181818',
//   },
//   headerTintColor: '#eaeaea',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// },
// })



const AppNavigator = createBottomTabNavigator({
  Warrior: {
    screen: TalentCalc,
    params: {
      activeClass: 'Warrior',
    },
    navigationOptions: {
      tabBarLabel: 'Warrior',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-warrior.jpg')}
          {...props}
        />
      )
    }
  },
  Paladin: {
    screen: TalentCalc,
    params: {
      activeClass: 'Paladin',
    },
    navigationOptions: {
      tabBarLabel: 'Paladin',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-paladin.jpg')}
          {...props}
        />
      )
    }
  },
  Hunter: {
    screen: TalentCalc,
    params: {
      activeClass: 'Hunter',
    },
    navigationOptions: {
      tabBarLabel: 'Hunter',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-hunter.jpg')}
          {...props}
        />
      )

    }
  },
  Rogue: {
    screen: TalentCalc,
    params: {
      activeClass: 'Rogue',
    },
    navigationOptions: {
      tabBarLabel: 'Rogue',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-rogue.jpg')}
          {...props}
        />
      )

    }
  },
  Shaman: {
    screen: TalentCalc,
    params: {
      activeClass: 'Shaman',
    },
    navigationOptions: {
      tabBarLabel: 'Shaman',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-shaman.jpg')}
          {...props}
        />
      )

    }
  },
  Priest: {
    screen: TalentCalc,
    params: {
      activeClass: 'Priest',
    },
    navigationOptions: {
      tabBarLabel: 'Priest',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-priest.jpg')}
          {...props}
        />
      )

    }
  },
  Warlock: {
    screen: TalentCalc,
    params: {
      activeClass: 'Warlock',
    },
    navigationOptions: {
      tabBarLabel: 'Warlock',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-warlock.jpg')}
          {...props}
        />
      )
    }
  },

  Mage: {
    screen: TalentCalc,
    params: {
      activeClass: 'Mage',
    },
    navigationOptions: {
      tabBarLabel: 'Mage',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-mage.jpg')}
          {...props}
        />
      )

    }
  },

  Druid: {
    screen: TalentCalc,
    params: {
      activeClass: 'Druid',
    },
    navigationOptions: {
      tabBarLabel: 'Druid',
      tabBarIcon: props => (
        <TabBarIcon
          source={require('./assets/images/class-icons/icon-druid.jpg')}
          {...props}
        />
      )
  }}
},{
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#ffffff',
    inactiveTintColor: '#cccccc',
    tabStyle: {

    },
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: '#000000',
    },
  },
})
export default createAppContainer(AppNavigator)