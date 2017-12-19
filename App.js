import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { StackNavigator, TabNavigator } from 'react-navigation';

// Stack Navigator
import welcome from './src/containers/welcome';
import signUp from './src/containers/signUp';
import login from './src/containers/login';

// Tab Navigator
import history from './src/containers/history';
import newsfeed from './src/containers/newsfeed';
import submitStory from './src/containers/submitStory';
import messagingList from './src/containers/messagingList';
import message from './src/containers/message';
import profile from './src/containers/profile';
// import reducers from './src/reducers';


/* eslint-disable react/jsx-filename-extension, react/prop-types */

// const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

const MessageStack = StackNavigator (
  {
    messagingList: { screen: messagingList },
    message: { screen: message },
  }
)

const TabRoot = TabNavigator (
  {
    history: { screen: history },
    newsfeed: { screen: newsfeed },
    submitStory: { screen: submitStory },
    messaging: { screen: MessageStack },
    profile: { screen: profile },
  }, {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: '#999999',
      showLabel: false,
      showIcon: true,
      lazy: true,
      style: {
        backgroundColor: '#DEDEDE',
      },
    },
  },
)

const NavRoot = StackNavigator(
  {
    welcome: { screen: welcome },
    signUp: { screen: signUp },
    login: { screen: login },
    newsfeed: {screen: TabRoot },
  },
    {
      headerMode: 'none',
      navigationOptions: {
      headerVisible: false,
      gesturesEnabled: false
    }
  }
);

const App = () => {
  return (
    // <Provider store={createStoreWithMiddleWare(reducers)}>
      <NavRoot />
    // </Provider>
  );
};

export default App;
