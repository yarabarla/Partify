import React, { Component } from 'react';
import {
  Text,
  TextInput,
  Button,
  View
} from 'react-native';

import styles from './Entry.Styles';

export default class Entry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style = {{width: 200, textAlign: 'center', flex: 2}}
          placeholder = "Holding this shit"
          onChangeText = {(text) => this.value = text}
        />
        <Button
          onPress = {() => alert(this.value)}
          style = {{flex:2}}
          title = 'Join Room'
          color = 'purple'
        />
  {/*      <Text style={styles.welcome}>
          Go fuck yourself!
        </Text>
        <Text style={styles.instructions}>
          To get started, suck a cock.
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>*/}
      </View>
    )
  }
}
