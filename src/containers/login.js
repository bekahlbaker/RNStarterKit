import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Content, View, Button, Text } from 'native-base';
import { CheckBox, SocialIcon } from 'react-native-elements';
import * as Keychain from 'react-native-keychain';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { emailAuth } from '../../src/actions/auth.actions';
import globalStyles from '../global/styles';
import Logo from '../../src/assets/FakeLogo.png';

/* eslint-disable react/prop-types, react/jsx-filename-extension */

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {},
      checked: false,
      emailHasError: false,
      emailError: '',
      passwordHasError: false,
      passwordError: '',
    };

    this.User = t.struct({
      username: t.String,
      password: t.String,
    });

    this.onChange = this.onChange.bind(this);
    this.handleCheckButton = this.handleCheckButton.bind(this);
    this.handleRegisterHereButton = this.handleRegisterHereButton.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('SignedIn');
    }

    if (nextProps.authError) {
      this.setState({ passwordHasError: true, passwordError: nextProps.authError.password });
      this.setState({ emailHasError: true, emailError: nextProps.authError.email });
    }
  }

  onChange(value) {
    this.setState({ value });
  }

  handleCheckButton() {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        if (this.state.value.username && this.state.value.password) {
          Keychain
            .setGenericPassword(this.state.value.email, this.state.value.password)
            .then(() => {
              console.log('Credentials saved!');
            })
            .catch((err) => {
              console.log(`Could not save credentials ${err}`);
            });
        }
      } else {
        Keychain
          .resetGenericPassword()
          .then(() => {
            console.log('Credentials successfully deleted');
          });
      }
    });
  }

  handleRegisterHereButton() {
    this.props.navigation.navigate('signUp');
  }

  handleLoginButton() {
    console.log('VALUE -> ', this.state.value);
    const value = this.form.getValue();
    if (value) {
      console.log('value: ', value);
      this.props.emailAuth(value);
    }
  }

  render() {
    const loginStyles = {
      forgotPasswordRow: {
        justifyContent: 'space-between',
        marginTop: 0,
      },
      registerHereRow: {
        marginTop: 20,
        justifyContent: 'center',
      },
      registerHereButton: {
        marginLeft: 8,
      },
    };

    const formOptions = {
      fields: {
        username: {
          hasError: this.state.emailHasError,
          error: this.state.emailError,
        },
        password: {
          hasError: this.state.passwordHasError,
          error: this.state.passwordError,
          password: true,
          secureTextEntry: true,
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
            <Image style={globalStyles.logo} source={Logo} />
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

          <View style={[globalStyles.rowView, loginStyles.forgotPasswordRow]}>
            <CheckBox
              title="Remember me"
              checked={this.state.checked}
              containerStyle={globalStyles.checkBox}
              textStyle={globalStyles.boldText}
              onPress={this.handleCheckButton}
            />

            <TouchableOpacity>
              <Text style={[globalStyles.buttonTextOnly, { marginTop: 8 }]}>Forgot password?</Text>
            </TouchableOpacity>
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
                style={{ width: 300 }}
              />
            </TouchableOpacity>
          </View>

          <View style={globalStyles.buttonView}>
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
              <Text style={[globalStyles.buttonTextOnly, loginStyles.registerHereButton]}>
                Register Here
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

export default connect(mapStateToProps, { emailAuth })(Login);
