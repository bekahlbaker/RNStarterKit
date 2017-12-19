import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, View, Button, Text, Input, Form, Spinner, Item, Label } from 'native-base';
import { CheckBox, SocialIcon } from 'react-native-elements';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types */

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email:'',
      password: '',
      checked: false,
    };
  }

  handleCheckButton = () => {
    this.setState({ checked: !this.state.checked })
  }

  handleSignUpButton = () => {
    this.props.navigation.navigate('newsfeed');
  }

  handleLoginButton = () => {
    this.props.navigation.navigate('login');
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

              <Label style={globalStyles.inputLabel}>Email</Label>
              <Item style={globalStyles.item}>
                <Input
                  style={globalStyles.input}
                  value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
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

          <View style={globalStyles.view}>
            <Text style={globalStyles.regularText}>OR</Text>
          </View>

          <View>
            <TouchableOpacity>
              <SocialIcon
                title='Sign In With Facebook'
                button
                type='facebook'
                style={signUpStyles.facebookButton}
              />
            </TouchableOpacity>
          </View>

          <View style={[globalStyles.rowView]}>
            <CheckBox
              title='Im not a robot!'
              checked={this.state.checked}
              containerStyle={globalStyles.checkBox}
              textStyle={globalStyles.boldText}
              onPress={this.handleCheckButton}
            />
          </View>

          <View>
            <Button
              style={globalStyles.button}
              onPress={this.handleSignUpButton}
            >
              <Text style={globalStyles.buttonText}>Sign Up</Text>
            </Button>
          </View>

          <View style={[globalStyles.rowView, signUpStyles.termsOfUseRow]}>
            <Text style={globalStyles.regularText}>By signing up, you agree to the </Text>
            <TouchableOpacity
              onPress={this.handleRegisterHereButton}
            >
              <Text style={[globalStyles.buttonTextOnly]}>Terms of Use</Text>
            </TouchableOpacity>
          </View>

          <View style={[globalStyles.rowView, signUpStyles.loginRow]}>
            <Text style={globalStyles.regularText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={this.handleLoginButton}
            >
              <Text style={[globalStyles.buttonTextOnly, signUpStyles.loginButton]}>Login Here</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const signUpStyles = {
  termsOfUseRow: {
    marginTop: 20,
    justifyContent: 'center',
  },
  loginRow: {
    marginTop: 20,
    justifyContent: 'center',
  },
  loginButton: {
    marginLeft: 8,
  },
  facebookButton: {
    width: 300,
  },
};
