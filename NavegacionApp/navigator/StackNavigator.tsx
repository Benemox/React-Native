import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pag1Screen } from '../src/screen/Pag1Screen';
import { Pag3Screen } from '../src/screen/Pag3Screen';
import { Pag2Screen } from '../src/screen/Pag2Screen';
import { PersonaScreen } from '../src/screen/PersonaScreen';
import { Persona3Screen } from '../src/screen/Persona3Screen';



export type RootStackParams = {
  Pag1Screen: undefined,
  Pag2Screen: undefined,
  Pag3Screen: undefined,
  Persona: undefined,
  Persona3: {id:number , nb: string, email:string}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () =>{
  return (
    <Stack.Navigator
      // initialRouteName="Pagina2Screen"
      screenOptions={
        {
          headerStyle:{
              elevation:0,
              shadowColor: "transparent"
          },
          cardStyle:{
            backgroundColor:"white"
          }
        }
      }
    >
      
      <Stack.Screen name="Pag1Screen"  options= {{title:"Pagina 1"}} component={Pag1Screen} />
      <Stack.Screen name="Pag2Screen" options= {{title:"Pagina 2"}} component={Pag2Screen} />
      <Stack.Screen name="Pag3Screen" options= {{title:"Pagina 3"}} component={Pag3Screen} />
      <Stack.Screen name="Persona" options= {{title:"Persona"}} component={PersonaScreen} />
      <Stack.Screen name="Persona3" options= {{title:"Persona3"}} component={Persona3Screen} />
    </Stack.Navigator>
  );
}