import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator({
  Home: HomeScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptoins: {
    title: 'Blogs'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return <App />
}