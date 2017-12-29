import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Text, Input, Form, Spinner, Item, Label } from 'native-base';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types, react/jsx-filename-extension */


const welcomeStyles = {
  message: {
    marginLeft: 32,
    marginRight: 32,
    marginTop: 30,
    marginBottom: 75,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999999',
    textAlign: 'center',
  },
};

export default class WelcomeScreen extends Component {
  constructor() {
    super();

    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.handleSignUpButton = this.handleSignUpButton.bind(this);
  }

  handleLoginButton() {
    this.props.navigation.navigate('login');
  }

  handleSignUpButton() {
    this.props.navigation.navigate('signUp');
  }

  render() {
    return (
      <Container style={globalStyles.container}>
        <Content
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          contentContainerStyle={globalStyles.scrollView}
        >
          <View style={globalStyles.view}>
            <View style={globalStyles.logo} />
          </View>

          <View style={globalStyles.view}>
            <Text style={welcomeStyles.message}>
              Welcome to MyBridge Connect where you play a vital role in connecting the Church of Nebraska to the work of God across our state!
            </Text>
          </View>

          <View>
            <Button
              style={globalStyles.button}
              onPress={this.handleLoginButton}
            >
              <Text style={globalStyles.buttonText}>Login</Text>
            </Button>
          </View>

          <View>
            <Button
              style={globalStyles.button}
              onPress={this.handleSignUpButton}
            >
              <Text style={globalStyles.buttonText}>Sign Up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
