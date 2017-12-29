import React, { Component } from 'react';
import * as Keychain from 'react-native-keychain';
import { createRootNavigator } from './src/router';
import SplashScreen from './src/containers/splashScreen';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

/* eslint-disable react/jsx-filename-extension, react/prop-types */

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: null,
    };
  }

  componentWillMount() {
    Keychain
      .getGenericPassword()
      .then((credentials) => {
        if (credentials) {
          setTimeout(() => {
            this.setState({ signedIn: false });
          }, 2000);
        } else {
          setTimeout(() => {
            this.setState({ signedIn: false });
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(`Could not load credentials. ${err}`);
        setTimeout(() => {
          this.setState({ signedIn: false });
        }, 2000);
      });
  }

  render() {
    if (this.state.signedIn === null) {
      return <SplashScreen />;
    }

    const Layout = createRootNavigator(this.state.signedIn);

    return (
      <Provider store={createStoreWithMiddleWare(reducers)}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
