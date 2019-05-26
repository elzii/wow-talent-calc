import React from 'react'
import { Alert, StyleSheet, SafeAreaView, Text, View, Image, TouchableHighlight } from 'react-native'
import { ScreenOrientation } from 'expo'
import Icon from 'react-native-vector-icons/AntDesign'
import TalentCalcHeader from './components/TalentCalc/Header'


import { createAppContainer, createStackNavigator, createBottomTabNavigator, withNavigation } from 'react-navigation'

import TalentCalc from './components/TalentCalc'
import Debug from './screens/Debug'


export class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  state = {
    activeClass: 'Hunter'
  }

  componentDidMount() {
    // ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  onSelectClass = (name) => {
    this.setState({ activeClass: name })
  }

  render() {

    const { activeClass } = this.state

    return (
      <View style={{ flex: 1 }}>
        <TalentCalcHeader
          availableSkillPoints={50}
          activeClass={activeClass}
          onSelectClass={this.onSelectClass}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <TalentCalc
            key={activeClass}
            navigation={this.props.navigation}
            activeClass={activeClass}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  }

  componentDidMount() {
    // ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE)
  }

  render() {
    return (
      <View style={styles.container}>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const WarriorStack = () => null
const HunterStack = () => null
const RogueStack = () => null
const ShamanStack = () => null
const PriestStack = () => null
const PaladinStack = () => null
const WarlockStack = () => null
const MageStack = () => null
const DruidStack = () => null


const TabBarIcon = ({ navigation, to, source, name = 'calculator', focused, size = 32, tintColor, ...props }) => {
  return <View style={{
    opacity: focused ? 1 : 0.5
  }}>
    {
      source
        ? <Image source={source} style={{ width: size, height: size }} />
        : <Icon name={name} size={size} color={tintColor} />
    }
  </View>
}

const TalentCalcStack = createStackNavigator({
  Warrior: {
    screen: TalentCalc,
    params: {
      activeClass: 'Warrior',
    },
  },
  Hunter: {
    screen: TalentCalc,
    params: {
      activeClass: 'Hunter',
    }
  },
  Rogue: {
    screen: TalentCalc,
    params: {
      activeClass: 'Rogue',
    }
  },
  Shaman: {
    screen: TalentCalc,
    params: {
      activeClass: 'Shaman',
    }
  },
  Priest: {
    screen: TalentCalc,
    params: {
      activeClass: 'Priest',
    }
  },
  Paladin: {
    screen: TalentCalc,
    params: {
      activeClass: 'Paladin',
    }
  },
  Warlock: {
    screen: TalentCalc,
    params: {
      activeClass: 'Warlock',
    }
  },
  Mage: {
    screen: TalentCalc,
    params: {
      activeClass: 'Mage',
    }
  },
  Druid: {
    screen: TalentCalc,
    params: {
      activeClass: 'Druid',
    }
  }

}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#181818',
    },
    // header: null,
    header: () => {
      return <TalentCalcHeader
        availableSkillPoints={50}
        activeClass={'Warrior'}
        // onSelectClass={this.onSelectClass}
      />
    },
    headerTintColor: '#eaeaea',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})



const AppNavigator = createBottomTabNavigator({
  TalentCalc: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Calculator',
      tabBarIcon: props => (
        <TabBarIcon
          // source={require('./assets/images/class-icons/icon-warrior.jpg')}
          name={'appstore-o'}
          {...props}
        />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: props => (
        <TabBarIcon
          // source={require('./assets/images/class-icons/icon-warrior.jpg')}
          name={'hearto'}
          {...props}
        />
      )
    }
  },
  // Warrior: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Warrior',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Warrior',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-warrior.jpg')}
  //         {...props}
  //       />
  //     )
  //   }
  // },
  // Paladin: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Paladin',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Paladin',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-paladin.jpg')}
  //         {...props}
  //       />
  //     )
  //   }
  // },
  // Hunter: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Hunter',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Hunter',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-hunter.jpg')}
  //         {...props}
  //       />
  //     )

  //   }
  // },
  // Rogue: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Rogue',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Rogue',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-rogue.jpg')}
  //         {...props}
  //       />
  //     )

  //   }
  // },
  // Shaman: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Shaman',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Shaman',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-shaman.jpg')}
  //         {...props}
  //       />
  //     )

  //   }
  // },
  // Priest: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Priest',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Priest',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-priest.jpg')}
  //         {...props}
  //       />
  //     )

  //   }
  // },
  // Warlock: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Warlock',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Warlock',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-warlock.jpg')}
  //         {...props}
  //       />
  //     )
  //   }
  // },

  // Mage: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Mage',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Mage',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-mage.jpg')}
  //         {...props}
  //       />
  //     )

  //   }
  // },

  // Druid: {
  //   screen: TalentCalc,
  //   params: {
  //     activeClass: 'Druid',
  //   },
  //   navigationOptions: {
  //     tabBarLabel: 'Druid',
  //     tabBarIcon: props => (
  //       <TabBarIcon
  //         source={require('./assets/images/class-icons/icon-druid.jpg')}
  //         {...props}
  //       />
  //     )
  // }}
},{
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#ffffff',
    inactiveTintColor: '#cccccc',
    tabStyle: {
      marginTop: 8
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