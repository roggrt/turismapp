


import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import auth, { firebase } from "@react-native-firebase/auth";

//imports 
import Example from './screens/example'
import Login from './screens/Login'
import Home from './screens/home'
import PostDetails from './screens/postDetails'
import Singup from './screens/Singup'
import AppNavigator from './navigation/Navegacion'



const Stack = createStackNavigator();
export default function App() {
  return (
   
      <NavigationContainer>
      <Stack.Navigator
      initialRoute="Home"
      screenOptions={{
        headerShown: false        
      }}>        
       
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Example" component={Example} />
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Singup" component={Singup} />
      <Stack.Screen name="PostDetails" component={PostDetails} />  
      </Stack.Navigator>
      </NavigationContainer>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



//turismapp-f09a2