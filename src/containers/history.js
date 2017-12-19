import React, { Component } from 'react';
import { Image, TouchableOpacity, Platform } from 'react-native';
import { Container, Content, View, Button, Text, Input, Form, Spinner, Item, Label } from 'native-base';
import { SearchBar, Icon } from 'react-native-elements';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types */

export default class LoginScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='lightbulb-outline'
        size={Platform.OS == 'ios' ? 32 : 24}
        color={tintColor}
      />
    ),
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
            <Text>HISTORY</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
