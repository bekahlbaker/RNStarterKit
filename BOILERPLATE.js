import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, View, Button, Text, Input, Form, Spinner, Item, Label } from 'native-base';
import { CheckBox } from 'react-native-elements';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types */

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
    gesturesEnabled: false
  }
  
  render() {
    return (
      <Container style={globalStyles.container}>
        <Content
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          contentContainerStyle={globalStyles.scrollView}
        >
          <View>
            <Text>NEWSFEED</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
