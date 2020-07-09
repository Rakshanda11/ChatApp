import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from '../screens/firstPage';
import ChatScreen from '../screens/ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import ChatProfile from '../screens/ChatProfilesScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={FirstPage} />
      <Stack.Screen name = "ChatProfile" component = {ChatProfile}/>
      <Stack.Screen name="ChatPage" component={ChatScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;