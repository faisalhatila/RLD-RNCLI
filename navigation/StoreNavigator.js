import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Startup, {
  screenOptions as startUpScreenIptions,
} from '../screens/StartUp';
import LoginScreen, {
  screenOptions as loginScreenOptions,
} from '../screens/Login';
import WelcomeScreen, {
  screenOptions as welcomeScreenOptions,
} from '../screens/Welcome';
import SelectLanguageScreen, {
  screenOptions as selectLanguageScreenOptions,
} from '../screens/SelectLanguage';
import SelectLocationScreen, {
  screenOptions as selectLocationScreenOptions,
} from '../screens/SelectLocation';
import HomeScreen, {screenOptions as homeScreenOptions} from '../screens/Home';
import ProductDetailsScreen, {
  screenOptions as productDetailsScreenOptions,
} from '../screens/ProductDetails';

const StoreStackNavigator = createStackNavigator();

export const StoreNavigator = () => {
  return (
    <StoreStackNavigator.Navigator>
      {/* <StoreStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        // options={homeScreenOptions}
      />
      <StoreStackNavigator.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={productDetailsScreenOptions}
      /> */}
      <StoreStackNavigator.Screen
        name="Startup"
        component={Startup}
        options={startUpScreenIptions}
      />
      <StoreStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={loginScreenOptions}
      />
      <StoreStackNavigator.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={welcomeScreenOptions}
      />
      <StoreStackNavigator.Screen
        name="SelectLanguage"
        component={SelectLanguageScreen}
        options={selectLanguageScreenOptions}
      />
      <StoreStackNavigator.Screen
        name="SelectLocation"
        component={SelectLocationScreen}
        options={selectLocationScreenOptions}
      />
      <StoreStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        // options={homeScreenOptions}
      />
      <StoreStackNavigator.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={productDetailsScreenOptions}
      />
    </StoreStackNavigator.Navigator>
  );
};
