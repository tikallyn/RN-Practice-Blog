import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ShowScreen from './src/screens/ShowScreen'
import { Provider } from './src/context/BlogContext'

const navigator = createStackNavigator({
  Home: HomeScreen,
  Show: ShowScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptoins: {
    title: 'Blogs'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}