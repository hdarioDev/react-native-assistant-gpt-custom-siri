import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, LoginScreen} from '../screens';

export type RootStackParams = {
  home: undefined;
  login: undefined;
  images: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,

          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'none',
        }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
