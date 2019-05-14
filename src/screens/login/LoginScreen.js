import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from 'libraries/components/AuthTemplate/Airbnb/Welcome/WelcomeScreen';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       <WelcomeScreen></WelcomeScreen>
    );
  }
}
