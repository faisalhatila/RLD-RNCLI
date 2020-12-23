import React from 'react';
import {useSelector} from 'react-redux';
// import StoreNavigator from './StoreNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Startup from '../screens/Startup';
import {StoreNavigator} from './StoreNavigator';

const MyStack = createStackNavigator();

const AppNavigator = (props) => {
  // const isAuth = useSelector(state => !!state.auth.token)
  return (
    <NavigationContainer>
      <StoreNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
