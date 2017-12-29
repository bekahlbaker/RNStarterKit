import React, { Component } from 'react';
import { Image, TouchableOpacity, Platform, FlatList } from 'react-native';
import { Container, Content, View, CardItem, Text, Card, List, Left } from 'native-base';
import { SearchBar, Icon } from 'react-native-elements';
import globalStyles from '../global/styles';

import NewsfeedCardItem from './newsfeedCardItem';

/* eslint-disable react/prop-types, react/jsx-filename-extension */

const items = [
      {
      "name": "Kayson Vargas",
      "type": "event"
   },
      {
      "name": "Rylie Knapp",
      "type": "event"
   },
      {
      "name": "Gisselle Witt",
      "type": "prayer"
   },
      {
      "name": "Kymani Brady",
      "type": "event"
   },
      {
      "name": "Tamia Randall",
      "type": "prayer"
   }
];

export default class LoginScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='picture-in-picture'
        size={Platform.OS == 'ios' ? 32 : 24}
        color={tintColor}
      />
    ),
  }

  constructor() {
    super();

    this.state = {
      feed: [
            {
            "name": "Kayson Vargas",
            "type": "event"
         },
            {
            "name": "Rylie Knapp",
            "type": "event"
         },
            {
            "name": "Gisselle Witt",
            "type": "prayer"
         },
            {
            "name": "Kymani Brady",
            "type": "event"
         },
            {
            "name": "Tamia Randall",
            "type": "prayer"
         }
      ],
    }
  }

  render() {
    return (
      <Container style={globalStyles.searchContainer}>
        <View style={newsfeedStyles.searchBarView}>
        <SearchBar
          round
          lightTheme
          noIcon={true}
          onChangeText={null}
          onClearText={null}
          placeholder='Search'
          containerStyle={globalStyles.searchBarContainer}
          inputStyle={globalStyles.searchBarInput}
          />
          <Icon
            name='account-circle'
            iconStyle={globalStyles.searchBarIcon}
            size={48}
            color={'#999999'}
          />
        </View>

        <Container style={globalStyles.container}>
          <Content
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            contentContainerStyle={globalStyles.scrollView}
          >
            <View>
              <FlatList
                removeClippedSubViews={false}
                keyExtractor={(item) => item.name}
                data={this.state.feed}
                renderItem={({item}) => (
                  <NewsfeedCardItem
                    name={item.name}
                    type={item.type}
                  />
                )}>
              </FlatList>
            </View>
          </Content>
        </Container>

      </Container>
    );
  }
}

const newsfeedStyles = {
  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
}
