import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
export default class Luffy extends React.Component {
  goToHomeScreen = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../mluffy.png')}
          style={{ width: 300, height: 400 }}
        />
         <TouchableOpacity style={{borderWidth: 3,
    marginTop: 50,
    borderRadius: 30,
    textAlign: 'center',
    width: 80,
    height:30,
    alignSelf: 'center',
    backgroundColor: 'lightblue',}} onPress={()=>{this.goToHomeScreen()}}><Text style={{ fontSize: 20, fontWeight: 600,alignSelf:'center',textAlign:'center' }}>Home</Text></TouchableOpacity>
      </View>
    );
  }
}
