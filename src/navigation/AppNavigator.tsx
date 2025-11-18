import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SpaceXScreen from '../screens/SpaceXScreen';

export type RootStackParamList = {
  SpaceX: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SpaceX" 
        component={SpaceXScreen}
        options={{ title: 'Lançamentos SpaceX' }}
      />
    </Stack.Navigator>
  );
}
