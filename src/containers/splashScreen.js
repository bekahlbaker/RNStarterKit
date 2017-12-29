import React from 'react';
import { Container, View, Text } from 'native-base';
import globalStyles from '../global/styles';

/* eslint-disable react/prop-types */

const SplashScreen = () => (
    <Container style={globalStyles.splashScreen}>
      <View>
        <Text style={globalStyles.splashScreenText}>Welcome to MyBridge Connect where you play a vital role in connecting the Church of Nebraska to the work of God across our state!</Text>
      </View>
    </Container>
);

export default SplashScreen;
