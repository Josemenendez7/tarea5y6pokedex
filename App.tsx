/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { SafeAreaView, View } from 'react-native';
  import Inicio from './Pantallas/Inicio';
  import Detalle from './Pantallas/DetallesDePokemon';
  import PantallaPokedex from './Pantallas/PantallaPokedex';

const Stack = createNativeStackNavigator();
  const App = ()=>{
    return (
            <NavigationContainer>
              <Stack.Navigator>
                 <Stack.Screen name = 'PantallaPokedex' component={PantallaPokedex} />
                 <Stack.Screen name = 'Inicio' component={Inicio} />
                <Stack.Screen name = 'DetallesDePokemon' component={Detalle} />
              </Stack.Navigator>
            </NavigationContainer>
    );
  };
export default App;
