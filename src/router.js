import { StackNavigator, TabNavigator } from 'react-navigation';

// Stack Navigator
import signUp from './containers/signUp';
import login from './containers/login';

// Tab Navigator
import history from './containers/history';
import message from './containers/message';
import profile from './containers/profile';

/* eslint-disable react/jsx-filename-extension, react/prop-types */

export const SignedIn = TabNavigator({
  history: { screen: history },
  messaging: { screen: message },
  profile: { screen: profile },
}, {
  tabBarOptions: {
    initialRouteName: 'history',
    tabBarPosition: 'bottom',
    activeTintColor: 'blue',
    inactiveTintColor: '#999999',
    showLabel: false,
    showIcon: true,
    lazy: true,
    style: {
      backgroundColor: '#DEDEDE',
    },
  },
});

export const SignedOut = StackNavigator(
  {
    login: { screen: login },
    signUp: { screen: signUp },
    main: { screen: SignedIn },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      gesturesEnabled: false,
    },
  },
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false,
        },
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
    },
  );
};
