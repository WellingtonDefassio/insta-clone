import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Feed from "./screens/Feed";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationIconType } from "./types/Types";
import AddPhoto from "./screens/AddPhoto";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Header from "./components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./screens/Register";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigator() {

  const [isAuth, setIsAuth] = useState(false);

  function iconTabRender(options: NavigationIconType, name: string) {
    return (
      <Icon name={name} size={30} color={options.color} />
    );
  }

  function logOut() {
    setIsAuth(false);
  }

  function logIn() {
    setIsAuth(true);
  }

  function RenderLoginScreen(props: any) {
    return (
      <Login {...props} logIn={logIn} />
    );
  }

  function RenderProfileOrLogin(props: any) {
    return (
      isAuth ?
        <Profile {...props} logOut={logOut} /> :
        <Stack.Navigator>
          <Stack.Screen name={"Login"} component={RenderLoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name={"Register"} component={Register} />
        </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Header />
      <Tab.Navigator initialRouteName={"Feed"}
                     screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tab.Screen name={"Feed"} component={Feed}
                    options={{ tabBarIcon: (options: NavigationIconType) => (iconTabRender(options, "home")) }} />
        <Tab.Screen name={"AddPhoto"} component={AddPhoto}
                    options={{ tabBarIcon: (options: NavigationIconType) => (iconTabRender(options, "camera")) }} />
        <Tab.Screen name={"Profile"}
                    component={RenderProfileOrLogin}
                    options={{ tabBarIcon: (options: NavigationIconType) => (iconTabRender(options, "user")) }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
