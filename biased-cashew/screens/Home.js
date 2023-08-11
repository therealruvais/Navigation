import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Home extends React.Component {
  goToSaitamaScreen = () => {
    this.props.navigation.navigate('Saitama');
  };
  goToLuffyScreen = () => {
    this.props.navigation.navigate('Luffy');
  };
  goToGokuScreen = () => {
    this.props.navigation.navigate('Goku');
  };
  render() {
    return (
      <View>
        <Text style={styles.head}>O P Characters</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.goToGokuScreen();
          }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Goku</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            this.goToSaitamaScreen();
          }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Saitama</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn3}
          onPress={() => {
            this.goToLuffyScreen();
          }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Luffy</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: 'purple',
    color: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 2,
    marginTop: 10,
  },
  btn: {
    borderWidth: 3,
    marginTop: 50,
    borderRadius: 30,
    textAlign: 'center',
    width: 300,
    alignSelf: 'center',
    backgroundColor: 'lightblue',
  },
  btn2: {
    borderWidth: 3,
    marginTop: 50,
    borderRadius: 30,
    textAlign: 'center',
    width: 300,
    alignSelf: 'center',
    backgroundColor: 'lightgreen',
  },
  btn3: {
    borderWidth: 3,
    marginTop: 50,
    borderRadius: 30,
    textAlign: 'center',
    width: 300,
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
  },
});
