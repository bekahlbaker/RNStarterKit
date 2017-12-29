import React, { Component } from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import { Container, Content, View, Button, Text, Input, Item } from 'native-base';
import { Icon } from 'react-native-elements';
import TextInputMask from 'react-native-text-input-mask';
import * as Keychain from 'react-native-keychain';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types, react/jsx-filename-extension */

export default class LoginScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='account-circle'
        size={Platform.OS == 'ios' ? 32 : 24}
        color={tintColor}
      />
    ),
  }

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      gender: 'Male',
      birthdate: 'Jan 15, 1987',
      email: 'toddrogers@gmail.com',
      phone: '123-456-7890',
      address: '1111 Park Lane, Dallas, TX',
      zipcode: '75000'
    }

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    Keychain
  .resetGenericPassword()
  .then(function() {
    console.log('Credentials successfully deleted');
  });
  this.props.navigation.navigate('SignedOut');
  }

  renderProfileCard() {
    if (this.state.isEditing) {
      return(
        <View style={profileStyles.infoColumn}>
          <Item style={profileStyles.infoInput}>
            <Input style={profileStyles.infoInputText}
              placeholder='Gender'
              value={this.state.gender}
              onChangeText={(gender) => this.setState({ gender })}
              />
          </Item>
          <Item style={profileStyles.infoInput}>
            <Input style={profileStyles.infoInputText}
              placeholder='Birthdate'
              value={this.state.birthdate}
              onChangeText={(birthdate) => this.setState({ birthdate })}
              />
          </Item>
          <Item style={profileStyles.infoInput}>
            <Input style={profileStyles.infoInputText}
              placeholder='Email'
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              />
          </Item>
          <Item style={profileStyles.infoInput}>
            <TextInputMask style={profileStyles.infoInputText}
              placeholder='Phone'
              value={this.state.phone}
              onChangeText={(phone) => this.setState({ phone })}
              keyboardType='phone-pad'
              mask={"([000]) - [000] - [0000]"}
              />
          </Item>
          <Item style={profileStyles.infoInput}>
            <Input style={profileStyles.infoInputText}
              placeholder='Address'
              value={this.state.address}
              onChangeText={(address) => this.setState({ address })}
              />
          </Item>
          <Item style={profileStyles.infoInput}>
            <Input style={profileStyles.infoInputText}
              placeholder='Zipcode'
              value={this.state.zipcode}
              onChangeText={(zipcode) => this.setState({ zipcode })}
              />
          </Item>

        </View>
      );
    } else {
      return (
        <View style={profileStyles.infoColumn}>
          <Text style={profileStyles.infoText}>{this.state.gender}</Text>
          <Text style={profileStyles.infoText}>{this.state.birthdate}</Text>
          <Text style={profileStyles.infoText}>{this.state.email}</Text>
          <Text style={profileStyles.infoText}>{this.state.phone}</Text>
          <Text style={profileStyles.infoText}>{this.state.address}</Text>
          <Text style={profileStyles.infoText}>{this.state.zipcode}</Text>
        </View>
      );
    }
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
          <View style={profileStyles.profileImage} />

          <View style={profileStyles.nameRow}>
            <Text style={profileStyles.name}>Todd Rogers</Text>
            <TouchableOpacity onPress={() => this.setState({ isEditing: !this.state.isEditing })}>
              <Icon
                name='mode-edit'
                size={24}
                color={'#999999'}
                iconStyle={profileStyles.editIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={globalStyles.whiteBGView}>
          <Text style={globalStyles.title}>Personal Information</Text>
          <View style={globalStyles.rowView}>

          <View style={profileStyles.infoLabelColumn}>
              <Text style={profileStyles.infoLabel}>Gender</Text>
              <Text style={profileStyles.infoLabel}>Birthdate</Text>
              <Text style={profileStyles.infoLabel}>Email</Text>
              <Text style={profileStyles.infoLabel}>Phone</Text>
              <Text style={profileStyles.infoLabel}>Address</Text>
              <Text style={profileStyles.infoLabel}>Zipcode</Text>
          </View>

          {this.renderProfileCard()}

          </View>
        </View>

        <View style={globalStyles.whiteBGView}>
          <Text style={globalStyles.title}>Other</Text>
          <View style={globalStyles.rowView}>

          <View style={profileStyles.infoLabelColumn}>
              <Text style={profileStyles.infoLabel}>Church</Text>
              <Text style={profileStyles.infoLabel}>Ministry</Text>
          </View>

          <View style={profileStyles.infoColumn}>
              <Text style={profileStyles.infoText}>The Village Church</Text>
              <Text style={profileStyles.infoText}>Ministry</Text>
          </View>
          </View>
        </View>

        <View>
          <Button
            style={globalStyles.button}
            onPress={this.handleSignOut}
          >
            <Text style={globalStyles.buttonText}>Sign Out</Text>
          </Button>
        </View>

        </Content>
      </Container>
    );
  }
}

const profileStyles = {
  nameRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#999999',
    marginTop: 25
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999999',
    marginTop: 20,
  },
  editIcon: {
    paddingLeft: 20,
  },
  infoLabelColumn: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 0.4
  },
  infoColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 0.6
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#999999',
    paddingTop: 22,
    paddingRight: 20,
  },
  infoText: {
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
    paddingTop: 22,
    paddingRight: 20
  },
  infoInput: {
    height: 38,
  },
  infoInputText: {
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
    marginTop: 20,
    height: 38,
    flex: 1,
  }
}
