import React, { Component } from 'react';
import { Image, TouchableOpacity, Platform, FlatList, Keyboard, Animated, Dimensions } from 'react-native';
import { Container, Content, View, Button, Text, Input, Form, Spinner, Item, Label } from 'native-base';
import { SearchBar, Icon } from 'react-native-elements';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types */

export default class Messages extends Component {
  static navigationOptions =  ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    headerTitleStyle: { alignSelf: 'center' },

    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='message'
        size={Platform.OS == 'ios' ? 32 : 24}
        color={tintColor}
      />
    ),
  });

  constructor() {
    super();

    this.state = {
      marginBottom: new Animated.Value(10),
      messages: [
            {
            "message": "Laoreet gravida tempor congue dolor non adipiscing senectus arcu sagittis.",
            "fromSelf": true
         },
            {
            "message": "Elit quis aenean dictum dolor torquent a curabitur fames primis.",
            "fromSelf": false
         },
            {
            "message": "Varius iaculis bibendum habitasse sollicitudin tristique habitasse quisque? Vulputate proin.",
            "fromSelf": true
         },
            {
            "message": "Ac massa platea congue suspendisse tristique et. Cursus sapien eu!",
            "fromSelf": true
         },
            {
            "message": "Fringilla auctor a nisl phasellus netus ac aenean varius senectus.",
            "fromSelf": true
         },
            {
            "message": "Lectus sociis congue nullam. Viverra a tincidunt morbi viverra nibh.",
            "fromSelf": true
         },
            {
            "message": "Justo dui quisque est nibh, scelerisque turpis felis egestas semper?",
            "fromSelf": false
         },
            {
            "message": "Rhoncus dis sagittis lobortis quam gravida tortor habitasse amet cursus.",
            "fromSelf": false
         },
            {
            "message": "Est habitant sit tincidunt commodo hac gravida dignissim adipiscing mi.",
            "fromSelf": true
         },
            {
            "message": "Habitant vulputate neque magnis, suscipit euismod quis donec feugiat at?",
            "fromSelf": true
         },
            {
            "message": "Id odio dignissim, est sed malesuada nec diam consectetur. Neque.",
            "fromSelf": true
         },
            {
            "message": "At conubia aliquet arcu varius eleifend. Ut magnis proin scelerisque.",
            "fromSelf": true
         },
            {
            "message": "Litora eros malesuada habitant convallis magnis. Taciti consectetur litora vestibulum?",
            "fromSelf": true
         },
            {
            "message": "Dictum gravida diam cursus massa eu torquent, dui semper. Justo.",
            "fromSelf": false
         },
            {
            "message": "Netus torquent lacus varius laoreet nec amet cum nascetur. Nostra.",
            "fromSelf": true
         },
            {
            "message": "Montes tortor suspendisse neque ac vivamus odio vel felis posuere!",
            "fromSelf": true
         },
            {
            "message": "Lorem nulla tincidunt lacus inceptos suscipit phasellus tincidunt donec, magna!",
            "fromSelf": false
         },
            {
            "message": "Torquent nascetur condimentum sociosqu dapibus erat phasellus per taciti leo.",
            "fromSelf": false
         },
            {
            "message": "Facilisi maecenas quam mauris leo tempus luctus porttitor. Sodales proin.",
            "fromSelf": true
         },
            {
            "message": "Cras justo pretium sapien phasellus habitant litora adipiscing mi? Et.",
            "fromSelf": true
         }
      ]
    }
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  // componentDidMount() {
  //   this.flatListRef.scrollToIndex({animated: false, index: 17 });
  // }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    const keyboardHeight = Dimensions.get('window').height - event.endCoordinates.height;
    Animated.timing(this.state.marginBottom, {
      duration: event.duration,
      toValue: keyboardHeight / 2 + 10,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.state.marginBottom, {
      duration: event.duration,
      toValue: 10,
    }).start();
  };

  getItemLayout = (data, index) => (
    { length: 50, offset: 50 * index, index }
  )

  render() {
    return (
      <Container style={globalStyles.container}>
        <Content
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          contentContainerStyle={globalStyles.scrollView}
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="always"
        >
          <View>
            <FlatList
              ref={(ref) => { this.flatListRef = ref; }}
              getItemLayout={this.getItemLayout}
              removeClippedSubViews={false}
              keyExtractor={(item) => item.message}
              data={this.state.messages}
              renderItem={({item}) => (
                <View style={item.fromSelf ? messageStyles.messageFromSelf : messageStyles.messageFromSender}>
                  <Text
                    style={messageStyles.messageText}>
                    {item.message}
                  </Text>
                </View>
              )}>
              </FlatList>
          </View>
        </Content>

        <View>
        <Item style={[globalStyles.item, { marginBottom: this.state.marginBottom }]}>
          <Input
            style={globalStyles.input}
            placeholder='Send text message...'
          />
        </Item>
        </View>

      </Container>
    );
  }
}

const messageStyles = {
  messageText: {
    fontSize: 13,
    fontWeight: "100",
    color: '#999999',
  },
  messageFromSender: {
    backgroundColor: 'white',
    marginRight: 100,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  messageFromSelf: {
    backgroundColor: 'pink',
    marginLeft: 100,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'pink'
  },
}
