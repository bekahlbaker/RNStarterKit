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
      name='add-circle'
      // size={Platform.OS == 'ios' ? 72 : 24}
      size={Platform.OS == 'ios' ? 32 : 24}
      color={tintColor}
      // iconStyle={globalStyles.addIcon}
      />
    ),
  }

  constructor() {
    super();

    this.state = {
      headline: '',
      story: '',
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

        <View style={globalStyles.whiteBGView}>
        <View>
          <Text style={globalStyles.title}>Submit Story</Text>
          <Text style={globalStyles.subtitle}>Tell us where you saw God at work.</Text>
        </View>

          <Form style={globalStyles.form}>

              <Label style={globalStyles.inputLabel}>Headline</Label>
              <Item style={globalStyles.item}>
                <Input
                  style={globalStyles.input}
                  value={this.state.headline}
                  onChangeText={(headline) => this.setState({ headline })}
                  maxLength={50}
                />
              </Item>
              <Label style={submitStoryStyles.characterCount}>{`${50 - this.state.headline.length} characters remaining`}</Label>

              <Label style={globalStyles.inputLabel}>Story</Label>
              <Item style={globalStyles.item}>
                <Input
                  style={submitStoryStyles.storyInput}
                  multiline={true}
                  textAlignVertical={'top'}
                  value={this.state.story}
                  onChangeText={(story) => this.setState({ story })}
                  maxLength={500}
                />
              </Item>
              <Label style={submitStoryStyles.characterCount}>{`${500 - this.state.story.length} characters remaining`}</Label>


              <View>
                <Text style={globalStyles.inputLabel}>Upload Image</Text>
                  <Button
                    style={submitStoryStyles.uploadButton}
                  >
                    <Text style={globalStyles.buttonText}>Upload</Text>
                  </Button>
              </View>

              <View style={globalStyles.buttonView}>
                <Button
                  style={globalStyles.button}
                >
                  <Text style={globalStyles.buttonText}>Submit</Text>
                </Button>
              </View>


            </Form>

          </View>

        </Content>
      </Container>
    );
  }
}

const submitStoryStyles = {
  storyInput: {
    height: 200,
    borderRadius: 5,
    borderColor: '#999999',
    borderWidth: 1,
    padding: 5,
    fontSize: 12,
    fontWeight: '100',
    backgroundColor: '#FFFFFF',
  },
  characterCount: {
    textAlign: 'right',
    paddingBottom: 5,
    marginRight: 10,
    marginTop: -8,
    fontSize: 11,
    fontWeight: '100',
    color: '#999999',
  },
  uploadButton: {
    margin: 5,
    width: 100,
    height: 30,
    backgroundColor: '#D7D8D9',
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft: 16,
  }
}
