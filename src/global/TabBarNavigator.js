import React, { Component } from 'react';
import { Image, TouchableOpacity, Platform } from 'react-native';
import { Container, Content, View, CardItem, Text, Card, List, Left } from 'native-base';
import { SearchBar, Icon } from 'react-native-elements';
import globalStyles from '../global/styles';

import newsfeed from '../containers/newsfeed';
import messaging from '../containers/messaging';

const TabBarNavigator = (props) => {
  return (
      <View style={tabBarStyles.tabBar}>
        <TouchableOpacity>
          <Icon
            name='lightbulb-outline'
            iconStyle={tabBarStyles.tabIcons}
            size={32}
            color={'#999999'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('newsfeed')}
        >
          <Icon
            name='picture-in-picture'
            iconStyle={tabBarStyles.tabIcons}
            size={32}
            color={'#999999'}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name='add-circle'
            iconStyle={tabBarStyles.addIcon}
            size={Platform.OS == 'ios' ? 72 : 46}
            color={'#999999'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('newsfeed')}
        >
          <Icon
            name='message'
            iconStyle={tabBarStyles.tabIcons}
            size={32}
            color={'#999999'}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name='account-circle'
            iconStyle={tabBarStyles.tabIcons}
            size={32}
            color={'#999999'}
          />
        </TouchableOpacity>
      </View>
  );
};

const tabBarStyles = {
  tabBar: {
    height: 45,
    backgroundColor: '#DEDEDE',
    justifyContent: 'space-around',
    flexDirection: 'row',
    overflow: 'visible',
    zIndex: 1,
  },
  tabIcons: {
    padding: 8,
  },
  addIcon: {
    padding: 8,
    marginBottom: Platform.OS == 'ios' ? 100 : 16,
  }
}

export default TabBarNavigator;
