import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import About from '../screens/about';
import Home from '../screens/home';
import MonkeyDirectory from '../screens/monkeyDirectory';
import MonkeyProfile from '../screens/monkeyProfile';
import { RootStackParamList } from '../interfaces/interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();
const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#2e2b2b',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Poppins-Regular',
  },
  headerTitleAlign: 'center',
  animation: 'fade',
};

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="MonkeyDirectory" component={MonkeyDirectory} />
        <Stack.Screen
          name="MonkeyProfile"
          component={MonkeyProfile}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
