import React from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Issuescreen from './Screens/Issuescreen';
import Searchscreen from './Screens/Searchscreen';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}
const   TabNavigator =createBottomTabNavigator({ 
  Issue : Issuescreen,
  Search : Searchscreen,
})
const AppContainer = createAppContainer(
  TabNavigator
)