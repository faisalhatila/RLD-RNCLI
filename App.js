/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {BoldtText, LightText} from './components/UI/Text';
import AppNavigator from './navigation/AppNavigator';
const App = () => {
  // return (
  //   <View>
  //     <LightText style={{color: '#000'}}>Hello Mate , How are you</LightText>
  //     <BoldtText style={{color: '#000'}}>Hello Mate , How are you</BoldtText>
  //   </View>
  // );
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
