import React from 'react';
import { SafeAreaView, FlatList, Dimensions, StyleSheet, Text, View, ScrollView, Alert } from 'react-native';

export default class FullScreenSwiper extends React.Component {

  static defaultProps = {
    pages: [
      {}
    ],
  }

  constructor(props) {
    super(props)

    const { width, height } = Dimensions.get('window')

    this.state = {
      width,
      height,
      visibleIndex: 0,
      active: false,
      someString: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium velit dolores nisi, alias vero a repellat nesciunt sint sapiente provident dolore excepturi maxime culpa deleniti, cupiditate soluta temporibus magni enim.'
    }
  }


  componentDidMount() {
    this.setState({ active: true })
  }


  viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 100,
    minimumViewTime: 150
  }
  onViewableItemsChanged = ({ viewableItems, changed }) => {
    viewableItems.forEach((item) => {
      if (!item.isViewable) return;

      if ( this.props.onChangeScreen ) {
        this.props.onChangeScreen(visibleIndex)
      } else {
        this.setState({ visibleIndex: item.index })
      }

    })
  }

  // Use this with scrollview
  // onMomentumScrollEnd = event => {
  //   const { x, y } = event.nativeEvent.contentOffset
  //   const { width } = this.state

  //   const visibleIndex = x / width

  //   if ( this.props.onChangeScreen ) {
  //     this.props.onChangeScreen(visibleIndex)
  //   } else {
  //     this.setState({ visibleIndex })
  //   }
  // }

  // renderPages = () => {
  //   const { pages } = this.props
  //   const { width } = this.state

  //   return pages.map((page,i) => {
  //     const { component: PageComponent, ...rest } = page

  //     return <View
  //       key={`page-${i}`}
  //       style={[styles.page, {
  //         width,
  //         // backgroundColor: i === 0 ? 'red' : 'cyan'
  //       }]}
  //     >
  //       {
  //         PageComponent &&
  //         // <Text>Hello</Text>
  //         <PageComponent {...this.props } {...this.state} {...rest} />
  //       }
  //     </View>
  //   })
  // }

  renderPage = ({ item, index }) => {
    const { pages } = this.props
    const { width } = this.state
    const {
      component: PageComponent,
      ...rest
    } = item

    return <View
      style={[styles.page, {
        width,
        // backgroundColor: i === 0 ? 'red' : 'cyan'
      }]}
    >
      {
        PageComponent &&
        <PageComponent {...this.state} {...rest} />
      }
    </View>

  }

  render() {
    const { width } = this.state
    const { pages } = this.props

    // <ScrollView
    //   ref={node => this.scrollViewRef = node}
    //   contentContainerStyle={[styles.wrapper, { }]}
    //   horizontal={true}
    //   showsHorizontalScrollIndicator={false}
    //   pagingEnabled={true}
    //   onMomentumScrollEnd={this.onMomentumScrollEnd}
    // >
    //   {this.renderPages()}
    // </ScrollView>

    return <FlatList
      keyExtractor={(item, index) => `page-${index}`}
      data={pages}
      renderItem={this.renderPage}
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.wrapper, {}]}
      viewabilityConfig={this.viewabilityConfig}
      onViewableItemsChanged={this.onViewableItemsChanged}
      windowSize={6}
    />
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    backgroundColor: 'transparent',
  },

  page: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
