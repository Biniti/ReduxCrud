import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { Loading } from "./components/loading";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Create from "./screens/create";

const Stack = createStackNavigator();

export default function Routes() {
  const selector = useSelector((state) => {
    return state;
  });
  return (
    <NavigationContainer>
      {selector.load.isLoading ? (
        <Loading />
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          {selector.user.isLogged ? (
            <Stack.Screen name="Home" component={Home} />
          ) : (
            <Stack.Screen name="Login" component={Login} />
          )}
          <Stack.Screen name="Create" component={Create} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
