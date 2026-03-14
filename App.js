import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {AppProvider, AppContext} from "./AppContext";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
  )
}

function MainTabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

function RootNavigation(){

  const {isLoggedIn} = useContext(AppContext);

  return(
    <NavigationContainer>
      {isLoggedIn ? <MainTabs/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default function App(){
  return(
    <AppProvider>
      <RootNavigation/>
    </AppProvider>
  )
}