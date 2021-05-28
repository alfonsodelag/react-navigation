import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

// React Navigation. Todas tus navegaciones deben estar adentro de NavigationContainer
import { NavigationContainer } from "@react-navigation/native";

// Ahi le indicamos que usaremos navegacion tipo STACK
import { createStackNavigator } from "@react-navigation/stack";

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            title: "Componente Principal",
            headerTitleAlign: "right",
            headerStyle: {
              backgroundColor: "#F4511E"
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
          />

          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({ route }) => ({
              title: route.params.clienteId
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
