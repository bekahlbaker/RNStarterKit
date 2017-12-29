import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Content, View, Button, Text } from 'native-base';
import { SocialIcon } from 'react-native-elements';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { newUser } from '../../src/actions/auth.actions';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types, react/jsx-filename-extension */

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {},
      emailHasError: false,
      emailError: '',
    };

    this.email = t.refinement(t.String, (email) => {
      const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return reg.test(email);
    });

    this.password = t.refinement(t.String, password => password.length >= 6);

    this.passwordConfirm = t.refinement(t.String, passwordConfirm => passwordConfirm === this.state.value.password);

    this.notARobot = t.refinement(t.Boolean, value => value === true);

    this.User = t.struct({
      email: this.email,
      username: t.String,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      notARobot: this.notARobot,
    });

    this.onChange = this.onChange.bind(this);
    this.handleSignUpButton = this.handleSignUpButton.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('SignedIn');
    }

    if (nextProps.authError) {
      this.setState({ emailHasError: true, emailError: nextProps.authError.email });
    }
  }

  onChange(value) {
    this.setState({ value });
  }

  handleSignUpButton() {
    console.log('VALUE -> ', this.state.value);
    const value = this.form.getValue();
    if (value) {
      console.log('value: ', value);
      this.props.newUser(value);
    }
  }

  handleLoginButton() {
    this.props.navigation.navigate('login');
  }

  render() {
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

    const formOptions = {
      fields: {
        email: {
          hasError: this.state.emailHasError,
          error: this.state.emailError ? this.state.emailError : 'Please enter a valid email address.',
        },
        username: {
          error: 'Please choose a username.',
        },
        password: {
          error: 'Password needs to be at least 6 characters.',
          password: true,
          secureTextEntry: true,
        },
        passwordConfirm: {
          error: 'Please make sure passwords match.',
          password: true,
          secureTextEntry: true,
        },
        notARobot: {
          label: 'I\'m not a robot!',
        },
      },
      stylesheet: globalStyles.formStyles,
    };

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
            <t.form.Form
              ref={c => this.form = c}
              type={this.User}
              options={formOptions}
              value={this.state.value}
              onChange={value => this.onChange(value)}
            />
          </View>

          <View style={globalStyles.view}>
            <Text style={globalStyles.regularText}>OR</Text>
          </View>

          <View>
            <TouchableOpacity>
              <SocialIcon
                title="Sign In With Facebook"
                button
                type="facebook"
                style={signUpStyles.facebookButton}
              />
            </TouchableOpacity>
          </View>

          <View style={globalStyles.buttonView}>
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
              <Text style={[globalStyles.buttonTextOnly, signUpStyles.loginButton]}>
                Login Here
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    authError: state.authError,
  };
};

export default connect(mapStateToProps, { newUser })(SignUp);
