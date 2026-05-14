import React from "react";

import Principal from "./src/Telas/Principal";
import Mercurio from "./src/Telas/Mercurio";
import Venus from "./src/Telas/Venus";
import Terra from "./src/Telas/Terra";
import Marte from "./src/Telas/Marte";
import Jupiter from "./src/Telas/Jupiter";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen
          name="Principal"
          component={Principal}
        />
        <Stack.Screen
          name="Mercurio"
          component={Mercurio}
        />
        <Stack.Screen
          name="Venus"
          component={Venus}
        />
        <Stack.Screen
          name="Terra"
          component={Terra}
        />
        <Stack.Screen
          name="Marte"
          component={Marte}
        />
        <Stack.Screen
          name="Jupiter"
          component={Jupiter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
