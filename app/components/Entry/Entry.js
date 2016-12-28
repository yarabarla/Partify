import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './Entry.Styles';

const LoginContainer = () => (
  <View style={styles.loginContainer}>
    <TouchableHighlight onPress={() => {}} underlayColor='#1f3563' style={styles.loginButton('#3b5998')}>
      <Text style={styles.loginText}>Facebook Login</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={() => {}} underlayColor='#e89600' style={styles.loginButton('orange')}>
      <Text style={styles.loginText}>Enter As Guest</Text>
    </TouchableHighlight>
  </View>
)

export default class Entry extends Component {
  constructor() {
    super()
    this.state = {
      timePassed: false
    }
  }

  setTimePassed() {
    this.setState({
      timePassed: true
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed()
    }, 1000)
  }

  render() {
    if (!this.state.timePassed) {
      return (
        <View style={styles.entryContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={{flex: 1, resizeMode: 'contain'}}
          />
        </View>
      )
    } else { // Replace with a more elegant scheme
      return (
        <View style={styles.entryContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={{flex: 1, resizeMode: 'contain'}}
          />
          <LoginContainer />
        </View>
      )
    }
  }
}
