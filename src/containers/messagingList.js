import React, { Component } from 'react';
import { TouchableOpacity, Platform, Dimensions, FlatList, ListItem } from 'react-native';
import { Container, Content, View, Text } from 'native-base';
import { SearchBar, Icon } from 'react-native-elements';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types, react/jsx-filename-extension */

export default class MessagingList extends Component {
  static navigationOptions = {
    title: 'Messages',
    headerTitleStyle: { alignSelf: 'center' },
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='message'
        size={Platform.OS == 'ios' ? 32 : 24}
        color={tintColor}
      />
    ),
  }

  constructor() {
    super();

    this.state = {
      list: [
         {"name": "Kiera Langley"},
         {"name": "Ella Hyde"},
         {"name": "Pearl Holcomb"},
         {"name": "Byron Casey"},
         {"name": "Fernando Vargas"},
         {"name": "Marvin Le"},
         {"name": "Emerson Chen"},
         {"name": "Brylee Watkins"},
         {"name": "Braylon Burris"},
         {"name": "Rylee Dickerson"},
         {"name": "Jean Schneider"},
         {"name": "Jorden Dejesus"},
         {"name": "Marshall Gross"},
         {"name": "Nasir Manning"},
         {"name": "Ernest Livingston"},
         {"name": "Valentino Lawson"},
         {"name": "Rodrigo Buchanan"},
         {"name": "Zayne Wright"},
         {"name": "Henry David"},
         {"name": "Kaya Roth"},
         {"name": "Isabelle Griffin"},
         {"name": "Alvaro Koch"},
         {"name": "Damarion Kirby"},
         {"name": "Nicole Burnett"},
         {"name": "Jesse Dominguez"},
         {"name": "Zariah Russell"},
         {"name": "Duncan Wise"},
         {"name": "Evan Schroeder"},
         {"name": "Eduardo Anthony"},
         {"name": "Paola Morgan"}
      ],
    }

    this.handleSelectNameToViewMessage = this.handleSelectNameToViewMessage.bind(this);
  }

  handleSelectNameToViewMessage(name) {
    this.props.navigation.navigate('message', {name});
  }

  renderMessagingListItem(name) {
    return (
      <View style={{ height: 42, borderBottomWidth: 1, borderColor: '#DEDEDE' }}>
        <TouchableOpacity onPress={() => this.handleSelectNameToViewMessage(name)}>
          <Text style={messagingListStyles.name}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
          removeClippedSubViews={false}
          keyExtractor={(item) => item.name}
          data={this.state.list}
          renderItem={({item}) => (
            this.renderMessagingListItem(item.name)
            )}>
          </FlatList>
        </View>
        </Content>
      </Container>
    );
  }
}

const deviceWidth = Dimensions.get("window").width;
const messagingListStyles = {
  list: {
    backgroundColor: 'transparent',
    marginTop: 10,
    margin: 5,
    padding: 5,
    marginRight: 16,
    width: deviceWidth - 32,
    marginBottom: 25
  },
  name: {
    width: deviceWidth - 64,
    marginLeft: 16,
    textAlign: 'left',
    paddingTop: 8,
    paddingBottom: 8,
  }
}
