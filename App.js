import React, { Component } from 'react';
import { StyleSheet, Text, View, Slider, Button, Clipboard, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bradius: {
        left: {
          top: 0,
          bottom: 0
        },
        right: {
          top: 0,
          bottom: 0
        }
      }
    };
  }
  writeToClipboard = async () => {
    const css = `
      border-top-left-radius: ${this.state.bradius.left.top}px;
      border-top-right-radius: ${this.state.bradius.right.top}px;
      border-bottom-left-radius: ${this.state.bradius.left.bottom}px;
      border-bottom-right-radius: ${this.state.bradius.right.bottom}px;
      width: 300px;
      height: 300px;
      background-color: black;
    `;
    await Clipboard.setString(css);
    Alert.alert('CSS copyed!');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Border Radius Generator!</Text>
        <View style={
          {
            ...styles.square,
            borderBottomLeftRadius: this.state.bradius.left.bottom,
            borderTopLeftRadius: this.state.bradius.left.top,
            borderBottomRightRadius: this.state.bradius.right.bottom,
            borderTopRightRadius: this.state.bradius.right.top,
          }
        }></View>
        <Slider
          style={{width: 300, height: 40}}
          minimumValue={1}
          maximumValue={150}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => {
            this.setState({
              bradius: {
                ...this.state.bradius,
                left: {...this.state.bradius.left, top: value}
              }
            })
          }}
        />
      <Slider
          style={{width: 300, height: 40}}
          minimumValue={1}
          maximumValue={150}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => {
            this.setState({
              bradius: {
                ...this.state.bradius,
                left: {...this.state.bradius.left, bottom: value}
              }
            })
          }}
        />
      <Slider
          style={{width: 300, height: 40}}
          minimumValue={1}
          maximumValue={150}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => {
            this.setState({
              bradius: {
                ...this.state.bradius,
                right: {...this.state.bradius.right, top: value}
              }
            })
          }}
        />
      <Slider
          style={{width: 300, height: 40}}
          minimumValue={1}
          maximumValue={150}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={(value) => {
            this.setState({
              bradius: {
                ...this.state.bradius,
                right: {...this.state.bradius.right, bottom: value}
              }
            })
          }}
        />

        <Text style={styles.instructions}>You can copy CSS to clipboard</Text>
        <Button title="copiar CSS" onPress={() => this.writeToClipboard()}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 300,
    height: 300,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
