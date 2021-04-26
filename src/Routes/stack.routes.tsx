import React from "react";
import { Welcome, UserIdentification, Confirmation } from "../screens";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../styles/colors";

const StackApp = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackApp.Navigator
    headerMode="none"
    initialRouteName="Welcome"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackApp.Screen name="Welcome" component={Welcome} />

    <StackApp.Screen name="UserIdentification" component={UserIdentification} />

    <StackApp.Screen name="Confirmation" component={Confirmation} />
  </StackApp.Navigator>
);


export default AppRoutes;