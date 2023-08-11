import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Home from './screens/Home';
import Goku from './screens/Goku';
import Saitama from './screens/Saitama';
import Luffy from './screens/Luffy';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  Home: Home,
  Goku: Goku,
  Saitama: Saitama,
  Luffy: Luffy,
  
});
const AppContainer = createAppContainer(AppNavigator);
