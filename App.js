import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/containers/Home";
import Chat from "./src/containers/Chat";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Chat: { screen: Chat },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
