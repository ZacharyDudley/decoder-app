import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      cipher: '',
      key: '',
      decoded: ''
    }
  }

  onButtonPress(cipherType) {
    this.setState({cipher: cipherType})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DECODE</Text>
        <View style={styles.cipherMenu}>
          <Button
            title="Caesar"
            onPress={() => this.onButtonPress('caesar')}
          />
          <Button
            title="Janus"
            onPress={() => this.onButtonPress('janus')}
          />
          <Button
            title="Atbash"
            onPress={() => this.onButtonPress('atbash')}
          />
          <Button
            title="Vigenere"
            onPress={() => this.onButtonPress('vigenere')}
          />
        </View>

        <View style={styles.textInput}>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            placeholder="message"
          />
          {
            this.state.cipher === 'vigenere' &&
            <TextInput
              onChangeText={(key) => this.setState({key})}
              placeholder="key"
            />
          }
        </View>

        <View style={styles.textOutput}>
          <Text>{this.state.decoded}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cipherMenu: {

  },
  textInput: {
    width: 50,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  textOutput: {
    width: 50,
    height: 20,
    borderColor: 'black',
    borderWidth: 1
  }
});
