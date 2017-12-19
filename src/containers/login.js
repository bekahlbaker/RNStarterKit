import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, View, Button, Text, Input, Form, Spinner, Item, Label } from 'native-base';
import { CheckBox } from 'react-native-elements';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types */

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      checked: false,
    };
  }

  handleCheckButton = () => {
    this.setState({ checked: !this.state.checked })
  }

  handleRegisterHereButton = () => {
    this.props.navigation.navigate('signUp');
  }

  handleLoginButton = () => {
    this.props.navigation.navigate('newsfeed');
  }

  render() {
    return (
      <Container style={globalStyles.container}>
        <Content
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          contentContainerStyle={globalStyles.scrollView}
        >
          <View style={globalStyles.view}>
            <View style={globalStyles.logo} />
          </View>

          <View style={globalStyles.view}>
            <Form style={globalStyles.form}>

              <Label style={globalStyles.inputLabel}>Username</Label>
              <Item style={globalStyles.item}>
                <Input
                  style={globalStyles.input}
                  value={this.state.username}
                  onChangeText={(username) => this.setState({ username })}
                />
              </Item>

              <Label style={globalStyles.inputLabel}>Password</Label>
              <Item style={globalStyles.item}>
                <Input
                  style={globalStyles.input}
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                />
              </Item>

            </Form>
          </View>

          <View style={[globalStyles.rowView, loginStyles.forgotPasswordRow]}>
            <CheckBox
              title='Remember me'
              checked={this.state.checked}
              containerStyle={globalStyles.checkBox}
              textStyle={globalStyles.boldText}
              onPress={this.handleCheckButton}
            />

            <TouchableOpacity
            >
              <Text style={globalStyles.buttonTextOnly}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Button
              style={globalStyles.button}
              onPress={this.handleLoginButton}
            >
              <Text style={globalStyles.buttonText}>Login</Text>
            </Button>
          </View>

          <View style={[globalStyles.rowView, loginStyles.registerHereRow]}>
            <Text style={globalStyles.regularText}>Dont have an account?</Text>
            <TouchableOpacity
              onPress={this.handleRegisterHereButton}
            >
              <Text style={[globalStyles.buttonTextOnly, loginStyles.registerHereButton]}>Register Here</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const loginStyles = {
  forgotPasswordRow: {
    justifyContent: 'space-between',
    marginBottom: 100,
    marginTop: -20,
  },
  registerHereRow: {
    marginTop: 20,
    justifyContent: 'center',
  },
  registerHereButton: {
    marginLeft: 8,
  },
};
